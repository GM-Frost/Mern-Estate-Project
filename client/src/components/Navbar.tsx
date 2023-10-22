import { LogoLight, LogoDark } from "../assets";
import { Link, useLocation, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IUserState,
  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
} from "../redux/userSlice/userSlice";
import { FaUserTie } from "react-icons/fa";
import { BsHouseAdd } from "react-icons/bs";
import LoginModal from "./Navbar/LoginModal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Navbar = (props: Props) => {
  const location = useLocation();
  const dispatch = useDispatch();
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSigninModal = () => {
    setIsModalOpen(true);
  };

  const closeSigninModal = () => {
    setIsModalOpen(false);
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
    } catch (error: any) {
      dispatch(signoutUserFailure(error.message));
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
        className="fixed left-0 top-0 w-full z-50 ease-in-out duration-300"
      >
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white h-20">
          <Link to="/">
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
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          {/********************************************** Dropdown **********************************************/}

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
                        {currentUser.username}
                      </span>
                    </Link>
                  </li>
                  <li className="hover:text-cyan-600/40 rounded-lg">
                    <a>Settings</a>
                  </li>
                  <li
                    onClick={handleSignOut}
                    className="hover:text-cyan-600/40  rounded-lg"
                  >
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
                    onClick={openSigninModal}
                    className="hover:text-cyan-600/40 rounded-lg "
                  >
                    <a>Sign-In</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <LoginModal isOpen={isModalOpen} onClose={closeSigninModal} />

          {/********************************************** MOBILE Button **********************************************/}
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
