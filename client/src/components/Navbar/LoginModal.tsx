import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoDark } from "../../assets";
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  IUserState,
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/userSlice/userSlice";
import OAuth from "../OAuth";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginSuccess, setLoginSuccess] = useState(false);

  const { loading, error } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      setLoginSuccess(true);
      toast.success("Sign in successfully");
    } catch (error: any) {
      toast.error("Internal Server Error");
      dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      onClose(); // Close the modal when login is successful
    }
  }, [loginSuccess, onClose]);

  return (
    <>
      <ToastContainer />
      {isOpen && (
        <dialog
          id="login_modal_form"
          className="modal modal-bottom sm:modal-middle"
          open={true}
        >
          <div className="modal-box md:max-w-5xl">
            <form method="dialog" className="modal-backdrop">
              <button
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-900 hover:text-white"
              >
                ✕
              </button>
            </form>

            <div className="py-8">
              <div className="flex bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div
                  className="hidden lg:block lg:w-1/2 bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                  }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                  <div className="items-center mb-5">
                    <img
                      src={LogoDark}
                      alt="Logo"
                      className="w-40 text-center justify-center items-center"
                    />
                  </div>
                  <p className="text-xl text-gray-600 text-center">
                    Welcome back!
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="text-center right-0 left-0 flex  justify-center space-x-4 mt-10">
                      <OAuth googlePage="Sign In" />
                    </div>
                    <div className="flex flex-row text-center justify-center items-center">
                      {error && <p className="text-red-500 mt-5">{error}</p>}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                      <a
                        href="#"
                        className="text-xs text-center text-gray-500 uppercase"
                      >
                        or login with email
                      </a>
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                      </label>
                      <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Password
                        </label>
                        <a href="#" className="text-xs text-gray-500">
                          Forget Password?
                        </a>
                      </div>
                      <input
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-8">
                      <button
                        type="submit"
                        className="uppercase justify-center items-center text-center w-full p-4 text-lg rounded-full bg-cyan-500 hover:bg-cyan-600 focus:outline-none flex gap-1 transition-all ease-in-out duration-300 hover:gap-3"
                      >
                        {loading ? "Verifying..." : "sign in"}
                        <span>
                          <BiLogInCircle />
                        </span>
                      </button>
                    </div>
                  </form>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link
                      to={"/sign-up"}
                      className="text-xs text-gray-500 uppercase"
                    >
                      or sign up
                    </Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default LoginModal;
