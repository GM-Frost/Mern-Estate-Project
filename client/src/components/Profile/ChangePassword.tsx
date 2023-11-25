import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IUserState,
  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../redux/userSlice/userSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword: React.FC = () => {
  const { currentUser, loading } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  //UPDATE PASSWORD
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [toggleEyeConfirm, setToggleEyeConfirm] = useState(false);

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password === "" && formData.confirmPassword === "") {
      toast.error("Please fill in all fields");
      setUpdateSuccess(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      setUpdateSuccess(false);
      return;
    }

    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: formData.password }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        toast.error("Failed to Update");
        setUpdateSuccess(false);
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      toast.success("Password updated");
      toast.warning("Signing out!");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleSignOut();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(updateUserFailure(error.message));
      toast.error("Something went wrong updating");
    }
  };

  const handleVisibility = () => {
    setToggleEye(!toggleEye);
  };

  const handleVisibilityConfirm = () => {
    setToggleEyeConfirm(!toggleEyeConfirm);
  };

  //HANDLE SIGNOUT
  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch(`/api/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
        return;
      }
      dispatch(signoutUserSuccess(data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(signoutUserFailure(error.message));
      } else {
        dispatch(signoutUserFailure("An unknown error occurred"));
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col flex-wrap w-full h-full space-y-3">
        <div className="flex flex-wrap font-bold justify-between items-start text-start">
          <h1>Change Password</h1>
        </div>
        <p className="text-sm">
          Your email address will not be published. Required fields are marked *
        </p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full md:w-1/2 flex-wrap justify-normal space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="Email">Email</label>
              <input
                className="bg-primary/5 p-2 rounded-md"
                type="email"
                name="email"
                value={currentUser.email}
                disabled
                id="email"
                placeholder="email"
              />
            </div>
            <div className="relative flex flex-col space-y-1">
              <label htmlFor="password">Password</label>
              <input
                className=" bg-primary/5 p-2 rounded-md"
                type={toggleEye ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="●●●●●●"
              />
              {toggleEye ? (
                <FiEye
                  className="absolute  bottom-0 right-3 top-1/2 cursor-pointer"
                  onClick={() => handleVisibility()}
                />
              ) : (
                <FiEyeOff
                  className="absolute  bottom-0 right-3 top-1/2 cursor-pointer"
                  onClick={() => handleVisibility()}
                />
              )}
            </div>
            <div className="relative flex flex-col space-y-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className=" bg-primary/5 p-2 rounded-md"
                type={toggleEyeConfirm ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
                placeholder="●●●●●●"
              />
              {toggleEyeConfirm ? (
                <FiEye
                  className="absolute  bottom-0 right-3 top-1/2 cursor-pointer"
                  onClick={() => handleVisibilityConfirm()}
                />
              ) : (
                <FiEyeOff
                  className="absolute  bottom-0 right-3 top-1/2 cursor-pointer"
                  onClick={() => handleVisibilityConfirm()}
                />
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-neutral p-3 rounded-md hover:bg-yellow-800 transition-colors duration-500 ease-in-out"
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
            <div className="flex justify-center text-green-400">
              {updateSuccess && <p>Password Changed Successfully</p>}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
