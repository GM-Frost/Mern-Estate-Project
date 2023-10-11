import { BiEdit, BiLogInCircle } from "react-icons/bi";
import Layout from "../components/Layout";
import { BsHouseAdd } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  IUserState,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
} from "../redux/userSlice/userSlice";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseApp } from "../firebase";

//IMPORT  USER UPDATE SLICE
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import DeleteUser from "../components/DeleteUser";
type Props = {};

type IFormData = {
  avatar?: string;
};
const Profile = (props: Props) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState<IFormData>({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  //UPDATE USER SLICE
  const dispatch = useDispatch();

  const { currentUser, loading, error } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  const openModal = () => {
    const modal = document.getElementById(
      "profile_modal"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const fileRef = useRef<HTMLInputElement | null>(null);
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
      (error: any) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  //UPDATE USER FROM MODAL

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    } catch (error: any) {
      dispatch(updateUserFailure(error.message));
      toast.error("Something went wrong updating");
    }
  };

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
  }, [file]);

  return (
    <>
      <Layout />
      <ToastContainer />
      <div>
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl">22</p>
                  <p className="text-gray-400"> Listing</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">10</p>
                  <p className="text-gray-400">Photos</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">89</p>
                  <p className="text-gray-400">Comments</p>
                </div>
              </div>
              <div className="relative">
                <div
                  className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                  style={{
                    backgroundImage: `url(${currentUser.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="space-x-4 flex justify-evenly mt-32 md:mt-0 md:justify-center">
                <button
                  onClick={openModal}
                  className="btn bg-cyan-600 rounded-md border-cyan-600 text-white flex gap-2 justify-center items-center  uppercase  hover:bg-cyan-800 shadow hover:shadow-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Edit
                  <span>
                    <BiEdit className="text-lg" />
                  </span>
                </button>
                <button className="btn btn-outline rounded-md border-gray-800 flex gap-2 justify-center items-center text-gray-800 uppercase  hover:text-cyan-600 hover:bg-white hover:border-cyan-600  shadow hover:shadow-lg font-medium  transition-all duration-300 transform hover:-translate-y-0.5">
                  Sign out
                  <span>
                    <BiLogInCircle className="text-lg" />
                  </span>
                </button>
              </div>
              <button className="mt-2 flex gap-2 justify-center items-center text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 md:py-3 md:px-6 md:text-lg">
                Create Listing
                <span>
                  <BsHouseAdd className="text-lg" />
                </span>
              </button>
            </div>
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="xl:text-4xl font-medium text-gray-700 sm:text-2xl">
                {currentUser.username}
              </h1>
              <p className="font-light text-gray-600 mt-3">
                Bucharest, Romania
              </p>
              <p className="mt-8 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="mt-2 text-gray-500">
                University of Computer Science
              </p>
            </div>
            <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
          <div
            onClick={handleDeleteClick}
            className="flex justify-end mt-3 text-red-500 cursor-pointer hover:text-red-700"
          >
            <p>Delete Account</p>
          </div>
        </div>
      </div>
      <DeleteUser
        isOpen={isConfirmationModalOpen}
        onCancel={handleCancel}
        onConfirmDelete={handleConfirmDelete}
      />

      <dialog
        id="profile_modal"
        className="modal modal-bottom  sm:modal-middle"
      >
        <div className="modal-box  md:max-w-3xl">
          <form method="dialog" className="modal-backdrop">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-900 hover:text-white">
              ✕
            </button>
          </form>

          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />

          <div className="py-8">
            <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-2xl">
              <div className="w-full p-8 lg:w-1/2">
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-center items-center">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden">
                      <img
                        src={formData.avatar || currentUser.avatar}
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
                    {fileUploadError ? (
                      <span className="text-red-700 text-sm">
                        Error Image Upload (Image must be less than 2MB)
                      </span>
                    ) : filePercentage > 0 && filePercentage < 100 ? (
                      <span className="text-slate-700">
                        {`Uploading ${filePercentage} %...`}
                      </span>
                    ) : filePercentage === 100 ? (
                      <span className="text-green-600">
                        Image Successfully Uploaded
                      </span>
                    ) : (
                      ""
                    )}
                    <p className="text-red-700 text-sm">{error ? error : ""}</p>
                    <p className="text-green-700 text-sm">
                      {updateSuccess ? "User Updated Successfully" : ""}
                    </p>
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a
                      href="#"
                      className="text-xs text-center text-gray-500 uppercase"
                    >
                      Update your Profile
                    </a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Username
                    </label>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="text"
                      id="username"
                      defaultValue={currentUser.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                      </label>
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      id="email"
                      defaultValue={currentUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      id="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mt-8">
                    <button
                      disabled={loading}
                      className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 transition-colors duration-500"
                    >
                      {loading ? "Saving Changes..." : "Update"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
