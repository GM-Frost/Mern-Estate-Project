import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useSelector } from "react-redux";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IUserState } from "../../../redux/userSlice/userSlice";
import {
  IListingFormData,
  lFormInitialValue,
} from "../../types/CreateListing.types";
import Layout from "../../../components/Layout";

const ForSale = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  const [formData, setFormData] = useState<IListingFormData>(lFormInitialValue);
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  ////////////////////////// IMAGE UPLOAD //////////////////////////

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
  /// HANDLE FORM CHANGE
  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    if (
      e.target.id === "amenityParking" ||
      e.target.id === "amenityFurnished" ||
      e.target.id === "amenityAC" ||
      e.target.id === "amenityHeating" ||
      e.target.id === "amenityWasher" ||
      e.target.id === "amenityDryer" ||
      e.target.id === "amenityWifi" ||
      e.target.id === "amenityGym" ||
      e.target.id === "amenitySwimming" ||
      e.target.id === "amenitySecurity"
    ) {
      if (isCheckboxInput(e.target)) {
        setFormData({ ...formData, [e.target.id]: e.target.checked });
      }
    }

    if (e.target.id === "propertyType") {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  function isCheckboxInput(
    element: HTMLInputElement
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
          type: "Sale",
          agentProfile: currentUser?.avatar,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        toast.error("Failed to create listing");
        setError(data.message);
      }
      toast.success("Listing Created");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/profile");
    } catch (error) {
      setError(error.message);
      toast.error("Failed to create listing");
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="relative min-h-[400px] bg-base-200 items-center text-white flex bg-cover bg-no-repeat bg-blend-overlay bg-black/60 justify-center flex-col"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/5016999/pexels-photo-5016999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-center ">
          <div className="max-w-md flex flex-col text-center justify-center items-center">
            <div className="text-sm text-yellow-700 ">
              <p className="py-6">
                <ul className="flex justify-center items-center gap-3">
                  <Link to={"/"}>
                    <li>Home</li>
                  </Link>
                  <span>&#62;</span>
                  <Link to={"/profile"}>
                    <li>Profile</li>
                  </Link>
                  <span>&#62;</span>
                  <Link to={"/profile/addlisting"}>
                    <li>Listing</li>
                  </Link>
                  <span>&#62;</span>
                  <li>For Sale</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Submit Property</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Dashboard Section ---------------- */}
      <div className="flex justify-center items-center text-center">
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div className="w-full flex-col space-y-10 bg-white-50 mx-auto flex items-center justify-center p-6">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full space-y-10 mx-auto  items-center"
        >
          <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
            <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
              Property Information - FOR SALE
            </div>
            <div className="flex flex-col p-4 space-y-8">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="title">Property Title*</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="bg-primary/10 p-2 rounded-md"
                  maxLength={62}
                  minLength={10}
                  required
                  id="title"
                  onChange={handleFormChange}
                  value={formData.title}
                />
              </div>

              <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/3 space-y-2">
                  <label htmlFor="propertyType">Property Type*</label>
                  <select
                    name="propertyType"
                    className="bg-primary/10 p-2 rounded-md"
                    required
                    id="propertyType"
                    onChange={handleFormChange}
                    value={formData.propertyType}
                  >
                    <option value="" disabled>
                      Select a Property Type
                    </option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
                <div className="flex flex-col  w-full md:w-1/3 space-y-2">
                  <label htmlFor="Property Price">Property Price*</label>
                  <input
                    type="text"
                    placeholder="$50000.00"
                    className="bg-primary/10 p-2 rounded-md"
                    id="regularPrice"
                    onChange={handleFormChange}
                    value={formData.regularPrice}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/3 space-y-2">
                  <label htmlFor="Property Price">Discounted Price*</label>
                  <input
                    type="text"
                    placeholder="$50000.00"
                    className="bg-primary/10 p-2 rounded-md"
                    id="discountPrice"
                    onChange={handleFormChange}
                    value={formData.discountPrice}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">Total Area (Sq-Ft)</label>
                  <input
                    type="text"
                    placeholder="Here is demo text"
                    className="bg-primary/10 p-2 rounded-md"
                    id="totalArea"
                    onChange={handleFormChange}
                    value={formData.totalArea}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">Total Unit*</label>
                  <input
                    type="number"
                    placeholder="$50000.00"
                    className="bg-primary/10 p-2 rounded-md"
                    id="totalUnit"
                    onChange={handleFormChange}
                    value={formData.totalUnit}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/3 space-y-2">
                  <label htmlFor="PropertyType">Total Bedroom*</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="bg-primary/10 p-2 rounded-md"
                    id="bedrooms"
                    onChange={handleFormChange}
                    value={formData.bedrooms}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/3 space-y-2">
                  <label htmlFor="PropertyType">Total Bathroom*</label>
                  <input
                    type="number"
                    placeholder="2"
                    className="bg-primary/10 p-2 rounded-md"
                    id="bathrooms"
                    onChange={handleFormChange}
                    value={formData.bathrooms}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/3 space-y-2">
                  <label htmlFor="PropertyType">Total Kitchen*</label>
                  <input
                    type="number"
                    placeholder="1"
                    className="bg-primary/10 p-2 rounded-md"
                    id="kitchen"
                    onChange={handleFormChange}
                    value={formData.kitchen}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="Property Title">Description*</label>
                <textarea
                  rows={5}
                  placeholder="Add Some Description about your property"
                  className="bg-primary/10 p-2 rounded-md"
                  id="description"
                  onChange={handleFormChange}
                  value={formData.description}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
            <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
              Property Image
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex flex-col w-full space-y-2">
                <label htmlFor="Property Title">
                  First image will be the cover image. (max 6)*
                </label>
                <div className="mt-2 file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div
                    className="input_field flex flex-col w-max mx-auto text-center"
                    onDrop={handleFileDrop}
                  >
                    <label onDragOver={(e) => e.preventDefault()}>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        onChange={handleFileSelect}
                        type="file"
                        id="images"
                        accept="image/*"
                        multiple
                      />
                      <div className="cursor-pointer">
                        <svg
                          className="text-primary w-24 mx-auto mb-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                    </label>

                    <div className="title text-primaryLight uppercase">
                      or drop files here <br /> and Upload
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
                    <div className="flex justify-center items-center mt-8">
                      <button
                        onClick={handleImageSubmit}
                        className="bg-primaryDark/40 p-2 hover:bg-primaryDark hover:text-white transition-colors ease-in-out duration-300"
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Upload"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-red-600 text-sm">{imageUploadError}</p>
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
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
            <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
              Property Location
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">City*</label>
                  <input
                    type="text"
                    placeholder="Toronto"
                    className="bg-primary/10 p-2 rounded-md"
                    id="addressCity"
                    onChange={handleFormChange}
                    value={formData.addressCity}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">Province*</label>
                  <input
                    type="text"
                    placeholder="Ontario"
                    className="bg-primary/10 p-2 rounded-md"
                    id="addressProvince"
                    onChange={handleFormChange}
                    value={formData.addressProvince}
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">Address Details*</label>
                  <input
                    type="text"
                    placeholder="100 Main Street"
                    className="bg-primary/10 p-2 rounded-md"
                    id="addressLine"
                    onChange={handleFormChange}
                    value={formData.addressLine}
                  />
                </div>
                <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                  <label htmlFor="PropertyType">Google Map</label>
                  <input
                    type="text"
                    placeholder="100 Main Street"
                    className="bg-primary/10 p-2 rounded-md"
                    id="addressGoogle"
                    onChange={handleFormChange}
                    value={formData.addressGoogle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
            <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
              Amenities
            </div>
            <div className="flex flex-wrap p-4 space-y-4">
              <div className="flex flex-wrap md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
                <div className="space-x-2">
                  <div className="inline-flex items-center justify-center">
                    <div className="grid grid-cols-3 md:grid-cols-5 items-center  gap-4">
                      <label
                        htmlFor="amenityParking"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityParking"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-1 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Parking
                      </label>
                      <label
                        htmlFor="amenityFurnished"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityFurnished"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-2 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Furnished
                      </label>
                      <label
                        htmlFor="amenityAC"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityAC"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-3 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        A/C
                      </label>{" "}
                      <label
                        htmlFor="amenityHeating"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityHeating"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-4 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Heating
                      </label>
                      <label
                        htmlFor="amenityWasher"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityWasher"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-5 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Washer
                      </label>
                      <label
                        htmlFor="amenityDryer"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityDryer"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-6 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Dryer
                      </label>
                      <label
                        htmlFor="amenityWifi"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityWifi"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-7 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Wifi
                      </label>
                      <label
                        htmlFor="amenityGym"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenityGym"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-8 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Gym
                      </label>
                      <label
                        htmlFor="amenitySwimming"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenitySwimming"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-9 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Swimming Pool
                      </label>
                      <label
                        htmlFor="amenitySecurity"
                        className="cursor-pointer relative"
                      >
                        <input
                          type="checkbox"
                          id="amenitySecurity"
                          className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                          onChange={handleFormChange}
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="check-10 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                        />{" "}
                        Security System
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              disabled={loading || uploading}
              type="submit"
              className="p-4 bg-neutral rounded-md hover:bg-neutralDark transition-all duration-300 hover:scale-105"
            >
              {loading ? "Creating..." : "Create Listing"}
            </button>
          </div>
        </form>
      </div>
      <Layout />
    </>
  );
};

export default ForSale;
