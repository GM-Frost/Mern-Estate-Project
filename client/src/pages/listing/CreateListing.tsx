import { useState } from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseApp } from "../../firebase";
import { IUserState } from "../../redux/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
const CreateListing = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );
  //form states
  const [formData, setFormData] = useState({
    imageUrls: [] as string[],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const navigate = useNavigate();

  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //Image Loading Effect
  const [uploading, setUploading] = useState(false);

  const [imageUploadError, setImageUploadError] = useState<string | boolean>(
    false
  );

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleImageSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      files &&
      files.length > 0 &&
      files.length + formData.imageUrls.length < 7
    ) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files?.length; i++) {
        promises.push(storeImage(files[i]));
      }
      //waiting of all the images
      try {
        const urls = await Promise.all(promises); // Use try-catch for error handling
        setFormData({
          ...formData,
          imageUrls: formData.imageUrls.concat(urls),
        });
        setImageUploadError(false);
      } catch (err) {
        setImageUploadError("Image upload failed (2 mb max per image)");
      } finally {
        setUploading(false);
      }
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file: File) => {
    return new Promise((resolve, reject) => {
      //create storage
      const storage = getStorage(firebaseApp);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);

      //uploading file
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({ ...formData, type: e.target.id });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      if (isCheckboxInput(e.target)) {
        setFormData({ ...formData, [e.target.id]: e.target.checked });
      }
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  // Type guard to check if an element is a checkbox input
  function isCheckboxInput(
    element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  ): element is HTMLInputElement {
    return element.type === "checkbox";
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload atleast one image");

      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
          agentProfile: currentUser?.avatar,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      <Layout />

      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center items-center"
      >
        <div className="flex-1 justify-center items-center w-screen h-auto mt-20 bg-white ">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-3xl">
                  Create a New Listing
                </h1>
              </div>
              <div className="grid justify-center items-center grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Title*"
                  id="name"
                  maxLength={62}
                  minLength={10}
                  required
                  onChange={handleFormChange}
                  value={formData.name}
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Address*"
                  id="address"
                  required
                  onChange={handleFormChange}
                  value={formData.address}
                />
              </div>
              <div className="grid justify-center items-center grid-cols-1 mt-5">
                <textarea
                  className="textarea w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Description*"
                  id="description"
                  required
                  onChange={handleFormChange}
                  value={formData.description}
                />
              </div>
              <div className="my-4 grid grid-cols-2 gap-5">
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Sale</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                      id="sale"
                      onChange={handleFormChange}
                      checked={formData.type === "sale"}
                    />
                  </label>
                </div>
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Rent</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-success"
                      id="rent"
                      onChange={handleFormChange}
                      checked={formData.type === "rent"}
                    />
                  </label>
                </div>
              </div>
              <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Parking</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-warning"
                      id="parking"
                      onChange={handleFormChange}
                      checked={formData.parking}
                    />
                  </label>
                </div>
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Furnished</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info"
                      id="furnished"
                      onChange={handleFormChange}
                      checked={formData.furnished}
                    />
                  </label>
                </div>
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Offer</span>
                    <input
                      type="checkbox"
                      className="checkbox"
                      id="offer"
                      onChange={handleFormChange}
                      checked={formData.offer}
                    />
                  </label>
                </div>
              </div>
              <div className="divider">Prices</div>
              <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="p-1">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Beds</span>
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      min={1}
                      max={10}
                      required
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      onChange={handleFormChange}
                      value={formData.bedrooms}
                    />
                  </div>
                </div>
                <div className="p-1">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Bathrooms</span>
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      min={1}
                      max={10}
                      required
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      onChange={handleFormChange}
                      value={formData.bathrooms}
                    />
                  </div>
                </div>
                <div className="p-1">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Regular Price</span>
                      <span className="label-text text-sm">($ /Per Month)</span>
                    </label>
                    <input
                      type="number"
                      id="regularPrice"
                      min={50}
                      max={10000000}
                      required
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      onChange={handleFormChange}
                      value={formData.regularPrice}
                    />
                  </div>
                </div>
                {formData.offer && (
                  <div className="p-1">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Discounted Price</span>
                        <span className="label-text text-sm">
                          ($ /Per Month)
                        </span>
                      </label>
                      <input
                        type="number"
                        id="discountPrice"
                        min={0}
                        max={10000000}
                        required
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        onChange={handleFormChange}
                        value={formData.discountPrice}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="extraOutline p-4  w-auto  m-auto rounded-lg">
                  <p className="text-sm">
                    <b>Image:</b> First image will be the cover image. (max 6)
                  </p>
                  <div className="mt-2 file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div
                      className="input_field flex flex-col w-max mx-auto text-center"
                      onDrop={handleFileDrop}
                    >
                      <label onDragOver={(e) => e.preventDefault()}>
                        <input
                          onChange={handleFileSelect}
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          id="images"
                          accept="image/*"
                          multiple
                        />
                        <div className="cursor-pointer">
                          <svg
                            className="text-cyan-500 w-24 mx-auto mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                      </label>

                      <div className="title text-cyan-500 uppercase">
                        or drop files here <br /> and Upload
                      </div>
                    </div>
                    {files && (
                      <div>
                        <p
                          className={`text-gray-600 ${
                            files.length > 0 ? "" : "hidden"
                          }`}
                        >
                          Image Selected {files.length}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <button
                      onClick={handleImageSubmit}
                      className="btn btn-outline transition-colors ease-in-out duration-300"
                      disabled={uploading}
                    >
                      {uploading ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-red-600 text-sm">
                  {imageUploadError && imageUploadError}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {formData.imageUrls.length > 0 &&
                  formData.imageUrls.map((url, index) => (
                    <div
                      key={url}
                      className="flex flex-col p-3 justify-center text-center items-center"
                    >
                      <img
                        src={url}
                        alt="listing image"
                        className="w-20 h-20 object-contain rounded-lg"
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        type="button"
                        className="py-2 px-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
              </div>
              <div className="my-2 md:w-1/2 justify-center items-center  lg:w-1/4">
                <button
                  disabled={loading || uploading}
                  className="uppercase text-sm font-bold tracking-wide bg-gray-700 hover:bg-gray-800 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline transition-all ease-in-out duration-300"
                >
                  {loading ? "Creating..." : "Create Listing"}
                </button>
                <div className="flex justify-center items-center text-center">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateListing;
