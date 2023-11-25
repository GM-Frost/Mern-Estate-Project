import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LogoLight } from "../../assets";

import { FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//REDUX IMPORT
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
  IUserState,
} from "../../redux/userSlice/userSlice";
import OAuth from "../../components/OAuth";
import Header from "../../components/Header";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { loading, error } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      toast.success("Signed In Successfully!");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Internal Server Error");
      dispatch(signInFailure(error.message));
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <>
      <Header />
      <ToastContainer />
      <section className="min-h-screen flex items-stretch text-white ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Join us again!
            </h1>
            <p className="text-3xl my-4">
              {" "}
              Sign in to discover the latest listings and updates.
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <span>
              <a
                href="#"
                className="hover:text-primary transition-colors ease-in-out duration-300"
              >
                <FiTwitter className="h-10 w-10" />
              </a>
            </span>
            <span>
              <a
                href="#"
                className="hover:text-primary transition-colors ease-in-out duration-300"
              >
                <FaFacebookF className="h-10 w-10" />
              </a>
            </span>
            <span>
              <a
                href="#"
                className="hover:text-primary transition-colors ease-in-out duration-300"
              >
                <FaInstagram className="h-10 w-10" />
              </a>
            </span>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
          style={{ backgroundColor: "#161616" }}
        >
          <div
            className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <h1 className="my-6 justify-center items-center hidden md:flex">
              <img src={LogoLight} alt="" width={200} />
            </h1>
            <div className="py-6 space-x-2">
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                f
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                G+
              </span>
              <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                in
              </span>
            </div>
            <p className="text-gray-100">or use email your account</p>
            <form
              onSubmit={handleSubmit}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button
                  type="submit"
                  className="uppercase justify-center items-center text-center w-full p-4 text-lg rounded-full bg-primary hover:bg-primaryDark focus:outline-none flex gap-1 transition-all ease-in-out duration-300 hover:gap-3"
                >
                  {loading ? "Verifying..." : "sign in"}
                  <span>
                    <BiLogInCircle />
                  </span>
                </button>
              </div>
              <span>
                Dont have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="hover:text-primaryLight transition-colors ease-in-out duration-300"
                >
                  Register Here
                </Link>
              </span>

              <div className="text-center right-0 left-0 flex  justify-center space-x-4 mt-10">
                <OAuth googlePage="Sign In" />
              </div>
              <div className="flex flex-row text-center justify-center items-center">
                {error && <p className="text-red-500 mt-5">{error}</p>}
              </div>
              <div className="p-4 text-center right-0 left-0 flex  justify-center space-x-4 mt-16 lg:hidden ">
                <span>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors ease-in-out duration-300"
                  >
                    <FiTwitter className="h-10 w-10" />
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors ease-in-out duration-300"
                  >
                    <FaFacebookF className="h-10 w-10" />
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors ease-in-out duration-300"
                  >
                    <FaInstagram className="h-10 w-10" />
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
