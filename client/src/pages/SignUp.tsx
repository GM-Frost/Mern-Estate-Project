import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { FcGoogle } from "react-icons/fc";
import { BsPersonFillAdd } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LogoLight } from "../assets";
import OAuth from "../components/OAuth";

type IProps = {
  username: string;
  email: string;
  password: string;
};

const SignUp = (props: IProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.username) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        if (data.message.includes("username")) {
          setError("User already exists");
          toast.error("User already exists");
        } else if (data.message.includes("email")) {
          setError("Email already exists");
          toast.error("Email already exists");
        } else {
          setError(data.message);
        }
        return;
      }

      setLoading(false);
      setError(null);
      toast.success("Registered Successfully!");
      toast.info("Navigating...Please wait!");
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (error: any) {
      toast.error("Internal Server Error");
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    const clearError = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(clearError);
  }, [error]);

  return (
    <>
      <Layout />

      <ToastContainer />
      <div
        className="relative min-h-screen left-0 right-0 bottom-0 top-14 text-gray-900 flex justify-center bg-no-repeat bg-cover items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80)`,
        }}
      >
        <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
        <div className="max-w-screen-xl max-h-[1000px]  m-0 sm:m-10 glass shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="flex flex-row text-center justify-center items-center">
              {error && <p className="text-red-500 mt-5">{error}</p>}
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <OAuth googlePage="Sign Up" />
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-white tracking-wide font-medium bg-cyan-500 p-2 rounded-md  transform translate-y-1/2">
                    Or sign up with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="username"
                      placeholder="Username"
                      id="username"
                      onChange={handleChange}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                    />
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                    />
                    <button
                      disabled={loading}
                      className="mt-5 tracking-wide font-semibold bg-cyan-500 text-gray-100 w-full py-4 rounded-lg hover:bg-cyan-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <BsPersonFillAdd className="h-5 w-5" />
                      <span className="ml-3 transition-colors ease-in-out duration-300">
                        {loading ? "Loading..." : "Sign Up"}
                      </span>
                    </button>
                  </form>
                  <div className="flex font-mono mt-3 text-white text-center justify-center items-center">
                    <p>
                      Have an Account?{" "}
                      <Link
                        to={"/sign-in"}
                        className="text-cyan-300 hover:text-cyan-500 transition-colors ease-in-out duration-300"
                      >
                        Sign-In Here
                      </Link>
                    </p>
                  </div>
                  <p className="mt-6 text-xs text-white text-center">
                    I agree to abide by Nova's{" "}
                    <a href="#" className="border-b border-white border-dotted">
                      Terms of Service{" "}
                    </a>
                    and its{" "}
                    <a href="#" className="border-b border-white border-dotted">
                      Privacy Policy
                    </a>
                  </p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <img src={LogoLight} alt="" width={300} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 backdrop-blur-sm text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-cover bg-center justify-center bg-no-repeat bg-blend-overlay"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1795507/pexels-photo-1795507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="text-white">
                <h1 className="text-5xl mt-24 text-black bg-white/80 p-10">
                  Start Your Journey Here!
                </h1>
                <p className="text-3xl font-bold mt-24">
                  Join our community of home seekers and explore a world of
                  possibilities in the real estate market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
