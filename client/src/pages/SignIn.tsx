import { LogoLight } from "../assets";
import Layout from "../components/Layout";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <>
      <Layout />
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
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
            <span>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
              >
                <FiTwitter className="h-10 w-10" />
              </a>
            </span>
            <span>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
              >
                <FaFacebookF className="h-10 w-10" />
              </a>
            </span>
            <span>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
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
            <h1 className="my-6 justify-center items-center flex">
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
            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full p-4 text-lg rounded-sm bg-black"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                <a href="#">Forgot your password?</a>
              </div>
              <div className="px-4 pb-2 pt-4">
                <button className="uppercase justify-center items-center text-center w-full p-4 text-lg rounded-full bg-cyan-500 hover:bg-cyan-600 focus:outline-none flex gap-1 transition-all ease-in-out duration-300 hover:gap-3">
                  sign in{" "}
                  <span>
                    <BiLogInCircle />
                  </span>
                </button>
              </div>
              <span>
                Don't have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="hover:text-cyan-500 transition-colors ease-in-out duration-300"
                >
                  Register Here
                </Link>
              </span>
              <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                <span>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
                  >
                    <FiTwitter className="h-10 w-10" />
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
                  >
                    <FaFacebookF className="h-10 w-10" />
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="hover:text-cyan-400 transition-colors ease-in-out duration-300"
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
