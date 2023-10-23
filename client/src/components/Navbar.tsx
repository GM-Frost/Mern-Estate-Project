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
  const isHeroNav =
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/sign-in";

  const [nav, setNav] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const [color, setColor] = useState(isHeroNav ? "transparent" : "white");
  const [textColor, setTextColor] = useState(isHeroNav ? "#ffffff" : "black");
  const [logo, setLogo] = useState(isHeroNav ? `${LogoLight}` : `${LogoDark}`);
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
        setColor(isHeroNav ? "transparent" : "white");
        setTextColor(isHeroNav ? "#ffffff" : "black");
        setLogo(isHeroNav ? `${LogoLight}` : `${LogoDark}`);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setDropdownIsOpen(false);
      setSidebarIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
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
          {/********************************************** ACCOUNT Dropdown **********************************************/}

          <div className="mr-6">
            <div className="relative">
              <button
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                className="relative z-10  block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=880&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </button>

              {dropdownIsOpen ? (
                <>
                  <button
                    tabIndex={-1}
                    onClick={() => setDropdownIsOpen(false)}
                    className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
                  ></button>
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl text-black rounded-lg py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
                    >
                      Account Setting
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-400 hover:text-white"
                    >
                      Sign Out
                    </a>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          {/********************************************** Dropdown **********************************************/}

          <LoginModal isOpen={isModalOpen} onClose={closeSigninModal} />

          {/********************************************** MOBILE Button **********************************************/}
          <div
            onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            className="block md:hidden z-10"
          >
            {sidebarIsOpen ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>

          {/* MOBILE Menu */}
          {sidebarIsOpen ? (
            <>
              <button
                tabIndex={-1}
                onClick={() => setSidebarIsOpen(false)}
                className="fixed inset-0 h-full w-full  cursor-default"
              ></button>
              <div className="md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-2/3 h-screen  bg-black/30 backdrop-blur-2xl  text-center">
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
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
