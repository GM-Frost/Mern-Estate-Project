import { LogoLight, LogoDark } from "../assets";
import { Link, useLocation, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IUserState } from "../redux/userSlice/userSlice";
import { FaUserTie } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";

type Props = {};

const Navbar = (props: Props) => {
  const location = useLocation();
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );
  const isHomePage = location.pathname === "/";

  const [nav, setNav] = useState(false);

  const [color, setColor] = useState(isHomePage ? "transparent" : "white");
  const [textColor, setTextColor] = useState(isHomePage ? "#ffffff" : "black");
  const [logo, setLogo] = useState(isHomePage ? `${LogoLight}` : `${LogoDark}`);
  const handleNav = () => {
    setNav(!nav);
  };

  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo(`${LogoDark}`);
      } else {
        setColor(isHomePage ? "transparent" : "white");
        setTextColor(isHomePage ? "#ffffff" : "black");
        setLogo(isHomePage ? `${LogoLight}` : `${LogoDark}`);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: `${color}` }}
        className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300"
      >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white h-20 ">
          <Link to="/">
            {/* <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-4xl"
            >
              New Home
            </h1> */}
            <img src={logo} alt="" className="w-1/2 object-fit" />
          </Link>
          <ul className="hidden md:flex" style={{ color: `${textColor}` }}>
            <li className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-cyan-500 after:content-[''] after:absolute after:h-[2px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-cyan-500 after:content-[''] after:absolute after:h-[2px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-cyan-500 after:content-[''] after:absolute after:h-[2px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer">
              <Link to="/residency">Residency</Link>
            </li>

            <li className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-cyan-500 after:content-[''] after:absolute after:h-[2px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
          <div className="flex-none sm:mr-5">
            {currentUser ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className={`w-10 rounded-full border-2 ${
                      window.scrollY >= 90
                        ? "border-cyan-500 "
                        : " border-white"
                    }`}
                  >
                    <img src={currentUser?.avatar} alt="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52 text-gray-700"
                >
                  <li className="hover:text-cyan-600/40  rounded-lg">
                    <Link to={"/profile"} className="justify-between">
                      Profile
                      <span className="badge bg-cyan-600 text-white border-cyan-600">
                        {currentUser.username.split(" ")[0]}
                      </span>
                    </Link>
                  </li>
                  <li
                    onClick={openModal}
                    className="hover:text-cyan-600/40 rounded-lg "
                  >
                    <a>Sign-In</a>
                  </li>
                  <li className="hover:text-cyan-600/40 rounded-lg">
                    <a>Settings</a>
                  </li>
                  <li className="hover:text-cyan-600/40  rounded-lg">
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      window.scrollY >= 90
                        ? "border-cyan-500 text-cyan-500"
                        : isHomePage
                        ? " border-white"
                        : "border-cyan-500 text-cyan-500"
                    }`}
                  >
                    <FaUserTie className="h-7 w-7 m-1" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52 text-gray-700"
                >
                  <li className="hover:text-cyan-600/40  rounded-lg">
                    <Link to={"/profile"} className="justify-between">
                      Profile
                      <span className="badge bg-cyan-600 text-white border-cyan-600">
                        N/A
                      </span>
                    </Link>
                  </li>
                  <li
                    onClick={openModal}
                    className="hover:text-cyan-600/40 rounded-lg "
                  >
                    <a>Sign-In</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <button className="btn btn-sm flex items-center sm:mr-5">
              <BsHouseAdd className="w-5 h-5" />
              <span className="hidden md:block"> Create Listing</span>
            </button>
          </div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom  sm:modal-middle"
          >
            <div className="modal-box  md:max-w-5xl">
              <form method="dialog" className="modal-backdrop">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-900 hover:text-white">
                  ✕
                </button>
              </form>

              <div className="py-8">
                <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                  <div
                    className="hidden lg:block lg:w-1/2 bg-cover "
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
                    <a
                      href="#"
                      className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                    >
                      <div className="px-4 py-3">
                        <svg className="h-6 w-6" viewBox="0 0 40 40">
                          <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#FFC107"
                          />
                          <path
                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                            fill="#FF3D00"
                          />
                          <path
                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                            fill="#4CAF50"
                          />
                          <path
                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                            fill="#1976D2"
                          />
                        </svg>
                      </div>
                      <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                        Sign in with Google
                      </h1>
                    </a>
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
                      />
                    </div>
                    <div className="mt-8">
                      <button className="bg-gray-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 transition-colors duration-500">
                        Login
                      </button>
                    </div>
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

          {/* MOBILE Button */}
          <div onClick={handleNav} className="block md:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* MOBILE Menu */}
          <div
            className={
              nav
                ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-2/3 h-screen  bg-black/30 backdrop-blur-2xl  text-center ease-in duration-300"
                : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-2/3 h-screen bg-backdrop backdrop-blur-2xl text-center ease-in duration-300"
            }
          >
            <ul>
              <li className="p-4 text-4xl cursor-pointer">
                <img src={LogoLight} alt="" className="w-1/2 object-fit" />
              </li>
              <li className="p-4 text-4xl hover:text-cyan-500 cursor-pointer transition-all ease-in duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 text-4xl hover:text-cyan-500 cursor-pointer transition-all ease-in duration-300">
                <Link to="/about">About</Link>
              </li>
              <li className="p-4 text-4xl hover:text-cyan-500 cursor-pointer transition-all ease-in duration-300">
                <Link to="/residency">Residency</Link>
              </li>

              <li className="p-4 text-4xl hover:text-cyan-500 cursor-pointer transition-all ease-in duration-300">
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
