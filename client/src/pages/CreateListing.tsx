import { useState } from "react";
import Layout from "../components/Layout";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseApp } from "../firebase";

const CreateListing = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [formData, setFormData] = useState({
    imageUrls: [] as string[],
  });

  //Loading Effect
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
  return (
    <>
      <Layout />

      <form className="sm:mt-40 lg:mt-0">
        <div className="flex  justify-center items-center w-screen h-screen bg-white">
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
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Address*"
                />
              </div>
              <div className="my-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Sell</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                      id="sale"
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
                    />
                  </label>
                </div>
                <div className="form-control flex flex-row">
                  <label className="cursor-pointer label gap-2">
                    <span className="label-text">Parking</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-warning"
                      id="parking"
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
                      id="bathrooms"
                      min={1}
                      max={10}
                      required
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="p-1">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Discounted Price</span>
                      <span className="label-text text-sm">($ /Per Month)</span>
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      min={1}
                      max={10}
                      required
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
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
                        or drop files here
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
                  className="uppercase text-sm font-bold tracking-wide bg-gray-700 hover:bg-gray-800 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline transition-all ease-in-out duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateListing;
