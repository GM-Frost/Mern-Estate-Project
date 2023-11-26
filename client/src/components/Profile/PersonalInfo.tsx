import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  IUserState,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../redux/userSlice/userSlice";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseApp } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import DeleteUser from "../Navbar/DeleteUser";
import { IPersonalInfo } from "../../pages/types/PersonalInfo.types";

const PersonalInfo = () => {
  //User Details
  const [editMode, setEditMode] = useState<boolean>(false);
  const { currentUser, loading, error } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  //EDIT FORM DETAILS
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState<IPersonalInfo>({
    avatar: currentUser?.avatar || "",
    firstname: currentUser?.firstname || "",
    lastname: currentUser?.lastname || "",
    email: currentUser?.email || "",
    username: currentUser?.username || "",
    title: currentUser?.title || "",
    phone: currentUser?.phone || "",
    address: currentUser?.address || "",
    about: currentUser?.about || "",
  });

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const [socialLinks, setSocialLinks] = useState({
    linkedin: currentUser.socialLinks.linkedin || "",
    twitter: currentUser.socialLinks.twitter || "",
    instagram: currentUser.socialLinks.instagram || "",
    facebook: currentUser.socialLinks.facebook || "",
    portfolio: currentUser.socialLinks.portfolio || "",
  });

  const dispatch = useDispatch();

  const handleSocialLinksChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSocialLinks({ ...socialLinks, [id]: value });
  };

  ////////////////////////////////////////////////////////////////
  //////////// --------  FILE IMAGE UPLOAD -------- //////////////
  ////////////////////////////////////////////////////////////////
  const [file, setFile] = useState<File | undefined>(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : undefined;
    setFile(selectedFile);
  };

  const handleFileUpload = (file: File) => {
    const storage = getStorage(firebaseApp);
    const fileName = new Date().getTime() + file.name;

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_error: Error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };
  const handleEditChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const updatedData = {
        ...formData,
        socialLinks: { ...socialLinks },
      };

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      if (data.sucess === false) {
        dispatch(updateUserFailure(data.message));
        toast.error("Failed to Update");
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      toast.success("User updated successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(updateUserFailure(error.message));
      toast.error("Something went wrong updating");
    }
  };

  //DELETE USER FROM MODAL
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setConfirmationModalOpen(true);
  };

  const handleCancel = () => {
    setConfirmationModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        toast.error(data.message);
        return;
      }
      toast.success("User deleted successfully");
      dispatch(deleteUserSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(deleteUserFailure(error.message));
      toast.error(error.message);
    }

    setConfirmationModalOpen(false);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {editMode ? (
        <>
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />

          <div className="flex flex-col flex-wrap w-full h-full space-y-3">
            <p className="text-red-700 text-sm">{error ? error : ""}</p>
            <p className="text-green-700 text-sm">
              {updateSuccess ? "User Updated Successfully" : ""}
            </p>
            <div className="font-bold">
              <h1>Personal Info - Edit</h1>
            </div>
            <form onSubmit={handleEditSubmit} className="space-y-5">
              <div className="flex justify-center items-center">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <img
                    src={formData?.avatar || currentUser?.avatar}
                    alt="Profile Pic"
                    className="object-cover h-full w-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out"
                    onClick={() => fileRef.current!.click()}
                  >
                    <p className="text-white text-lg font-semibold">
                      <AiOutlinePicture className="text-3xl" />
                    </p>
                  </div>
                </div>
              </div>
              <p className="flex justify-center items-center mt-2">
                {fileUploadError && (
                  <span className="text-red-700 text-sm">
                    Error Image Upload (Image must be less than 2MB)
                  </span>
                )}
                {filePercentage > 0 && filePercentage < 100 && (
                  <span className="text-slate-700">
                    {`Uploading ${filePercentage} %...`}
                  </span>
                )}
                {filePercentage === 100 && (
                  <span className="text-green-600">
                    Image Successfully Uploaded
                  </span>
                )}
                <p className="text-red-700 text-sm">{error ?? ""}</p>
              </p>

              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="Property Title">First Name*</label>
                  <input
                    type="text"
                    placeholder="Firstname"
                    id="firstname"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.firstname}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="Property Title">Last Name*</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Lastname"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.lastname}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Email*</label>
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    disabled
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.email}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Username*</label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.username}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Title*</label>
                  <input
                    type="text"
                    placeholder="Title"
                    id="title"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.title}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="Property Title">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.phone}
                    onChange={handleEditChange}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="Property Title">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    id="address"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.address}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">About</label>
                  <textarea
                    placeholder="Something about yourself"
                    id="about"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.about}
                    onChange={handleEditChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">LinkedIn</label>
                  <input
                    type="text"
                    id="linkedin"
                    placeholder="www.linkedin.com/username"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.socialLinks.linkedin}
                    value={socialLinks.linkedin}
                    onChange={handleSocialLinksChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Instagram</label>
                  <input
                    type="text"
                    id="instagram"
                    placeholder="www.instagram.com/username"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.socialLinks.instagram}
                    value={socialLinks.instagram}
                    onChange={handleSocialLinksChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Twitter</label>
                  <input
                    type="text"
                    id="twitter"
                    placeholder="www.twitter.com/profile"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.socialLinks.twitter}
                    value={socialLinks.twitter}
                    onChange={handleSocialLinksChange}
                  />
                </div>
              </div>
              <div className="flex  space-y-4 md:space-y-0 ">
                <div className="w-full">
                  <label htmlFor="Property Title">Facebook</label>
                  <input
                    type="text"
                    id="facebook"
                    placeholder="www.facebook.com/username"
                    className="bg-primary/10 p-2 rounded-md w-full"
                    defaultValue={currentUser.socialLinks.facebook}
                    value={socialLinks.facebook}
                    onChange={handleSocialLinksChange}
                  />
                </div>
              </div>
              <div className="flex space-y-4 md:space-y-0 justify-center items-center ">
                <div className="p-4 bg-neutral rounded-md hover:bg-neutralDark text-center">
                  <button type="submit" className="">
                    {loading ? "Saving Changes..." : "Update Profile"}
                  </button>
                </div>
              </div>
              <div
                onClick={handleDeleteClick}
                className="flex justify-end mt-3 text-red-500 cursor-pointer hover:text-red-700"
              >
                <p>Delete Account</p>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="flex flex-col flex-wrap w-full h-full space-y-3">
          <div className="font-bold">
            <h1>Personal Info</h1>
          </div>

          <div className="sm:flex-row gap-5 md:flex">
            <img
              className="h-[200px] object-cover w-full md:w-1/3 rounded-md"
              src={currentUser.avatar}
              alt="Profile Picture"
            />
            <div className="sm:flex sm:flex-col items-center justify-center">
              <h2 className="font-bold">
                {currentUser.firstname} {currentUser.lastname}
              </h2>
              <h3 className="text-xs">({currentUser.username})</h3>
              <div className="text-sm text-baseLight">{currentUser.title}</div>
              <div className="mt-5 flex flex-col gap-2">
                <div className="flex gap-6">
                  <FiPhoneCall className=" text-primary  text-xl" />
                  {currentUser.phone ? currentUser.phone : "N/A"}
                </div>
                <div className="flex  gap-6">
                  <FaEnvelope className=" text-primary text-xl" />
                  {currentUser.email}
                </div>
                <div className="flex  gap-6">
                  <FaMapMarkerAlt className=" text-primary text-xl" />
                  {currentUser.address ? currentUser.address : "N/A"}
                </div>
                <div className="flex text-lg space-x-20 mt-3 items-center text-center justify-center">
                  <a href={currentUser?.socialLinks.facebook ?? "#"}>
                    <FaFacebook className="hover:text-primary cursor-pointer" />
                  </a>
                  <a href={currentUser?.socialLinks.linkedin ?? "#"}>
                    <FaLinkedin className="hover:text-primary cursor-pointer" />
                  </a>
                  <a href={currentUser?.socialLinks.twitter ?? "#"}>
                    <FaTwitter className="hover:text-primary cursor-pointer" />
                  </a>
                  <a href={currentUser?.socialLinks.instagram ?? "#"}>
                    <FaInstagram className="hover:text-primary cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary/10 p-4 rounded-lg flex-wrap">
            <h1 className="font-bold">About Me</h1>
            <p className="mt-4 text-sm ">{currentUser.about}</p>
          </div>
          <div className="justify-end items-end flex">
            <button
              onClick={handleEditClick}
              className="p-4 bg-neutral items-center justify-center text-center rounded-md hover:bg-yellow-600 transition-colors duration-500 ease-in-out"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
      <DeleteUser
        isOpen={isConfirmationModalOpen}
        onCancel={handleCancel}
        onConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};

export default PersonalInfo;
