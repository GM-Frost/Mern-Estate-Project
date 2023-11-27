import { FiTwitter } from "react-icons/fi";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../../components/OAuth";
import Header from "../../components/Header";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpNew = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://nova-estate-server.onrender.com/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <Header />
      <ToastContainer />
      <section className="min-h-screen flex items-stretch text-white flex-row-reverse ">
        <div
          className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10  text-dark p-4 bg-white/50">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Ready to find your dream home?
            </h1>
            <p className="text-3xl my-4">
              {" "}
              Sign up and start browsing listings tailored to your preferences.
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
                "url(https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
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
              <div className="md:flex gap-4">
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    onChange={handleChange}
                    className="block w-full p-4 text-lg rounded-sm bg-black capitalize"
                  />
                </div>
                <div className="pb-2 pt-4">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Lastname"
                    onChange={handleChange}
                    className="block w-full p-4 text-lg rounded-sm bg-black capitalize"
                  />
                </div>
              </div>
              <div className="pb-2 pt-4">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleChange}
                  className="block w-full p-4 text-lg rounded-sm bg-black lowercase"
                />
              </div>
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
                  {loading ? "Verifying..." : "sign up"}
                  <span>
                    <BiLogInCircle />
                  </span>
                </button>
              </div>
              <span>
                Have an account?{" "}
                <Link
                  to={"/sign-in"}
                  className="hover:text-primaryLight transition-colors ease-in-out duration-300"
                >
                  SignIn Here
                </Link>
              </span>

              <div className="text-center right-0 left-0 flex  justify-center space-x-4 mt-10">
                <OAuth googlePage="Sign Up" />
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

export default SignUpNew;
