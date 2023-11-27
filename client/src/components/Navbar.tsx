import { LogoLight, LogoDark } from "../assets/index.js";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  IUserState,
  signoutUserFailure,
  signoutUserStart,
  signoutUserSuccess,
} from "../redux/userSlice/userSlice";

import "react-toastify/dist/ReactToastify.css";
import { FaUserTie } from "react-icons/fa";
import { MdAddHomeWork } from "react-icons/md";
import { hostURI } from "../host.js";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );
  const isNotHeroNav =
    location.pathname === "/about" ||
    location.pathname === "/news" ||
    /^\/listing\/\w+/.test(location.pathname) ||
    /^\/news\/\w+/.test(location.pathname);

  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const [color, setColor] = useState(isNotHeroNav ? "white" : "transparent");
  const [textColor, setTextColor] = useState(
    isNotHeroNav ? "black" : "#ffffff"
  );
  const [logo, setLogo] = useState(
    isNotHeroNav ? `${LogoDark}` : `${LogoLight}`
  );

  const [profileIconColor, setProfileIconColor] = useState(
    isNotHeroNav ? "text-primaryDark" : "text-white"
  );

  const [addListingBtn, setAddListingBtn] = useState(
    isNotHeroNav ? "text-primaryDark border border-primaryLight" : "text-white"
  );

  //HANDLE SIGNOUT
  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch(`${hostURI}/api/auth/signout`);
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

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo(`${LogoDark}`);
        setProfileIconColor("text-primaryDark");
        setAddListingBtn("text-primaryDark border border-primaryDark");
      } else {
        setColor(isNotHeroNav ? "white" : "transparent");
        setTextColor(isNotHeroNav ? "black" : "#ffffff");
        setLogo(isNotHeroNav ? `${LogoDark}` : `${LogoLight}`);
        setProfileIconColor(isNotHeroNav ? "text-primaryDark " : "text-white");
        setAddListingBtn(
          isNotHeroNav
            ? "text-primaryDark border border-primaryDark"
            : "text-white"
        );
      }
    };
    window.addEventListener("scroll", changeColor);
  });

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

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const navmenu = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/listings",
      title: "Property",
    },
    {
      link: "/news",
      title: "News",
    },
    {
      link: "/contactus",
      title: "Contact",
    },
  ];

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-50 ease-in-out duration-300 ${
        window.scrollY > 90 ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-light h-20">
        <Link to="/">
          <img src={logo} alt="" className="w-1/2 object-fit" />
        </Link>
        <ul
          className="hidden md:flex items-center justify-center"
          style={{ color: `${textColor}` }}
        >
          {navmenu.map((items) => (
            <li
              key={items.title}
              className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-primary after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer"
            >
              <Link to={items.link}>{items.title}</Link>
            </li>
          ))}
          {/********************************************** ACCOUNT Dropdown **********************************************/}
          <div className="ml-6">
            <div className="relative ">
              {currentUser ? (
                <button
                  onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                  className="relative z-10 transition-all duration-700 ease-in-out block h-10 w-10 rounded-md  overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-primaryLight hover:bg-primaryLight p-1"
                >
                  <img
                    src={currentUser?.avatar}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </button>
              ) : (
                <FaUserTie
                  onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                  className={`relative
                ${profileIconColor}
                cursor-pointer z-10 transition-all duration-700 ease-in-out block h-10 w-10 rounded-md  overflow-hidden border-2 border-gray-600 focus:outline-none focus:bg-primaryLight hover:bg-primaryLight hover:text-white p-1`}
                />
              )}

              {dropdownIsOpen ? (
                <>
                  <button
                    tabIndex={-1}
                    onClick={() => setDropdownIsOpen(false)}
                    className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
                  ></button>
                  <motion.div
                    initial="exit"
                    animate={dropdownIsOpen ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    className="absolute ease-in-out right-0 mt-2 w-48 bg-white shadow-xl text-black rounded-lg py-2"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                    >
                      <Link to={"/profile"} className="flex justify-between">
                        Profile
                        <span className="inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium text-light bg-primary">
                          {currentUser ? currentUser.firstname : "N/A"}
                        </span>
                      </Link>
                    </a>
                    <Link
                      to={currentUser ? "/profile" : "/sign-in"}
                      className="block px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                    >
                      Account Setting
                    </Link>
                    {currentUser ? (
                      <a
                        onClick={handleSignOut}
                        className="block cursor-pointer px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                      >
                        Sign Out
                      </a>
                    ) : (
                      <Link
                        to={"/sign-in"}
                        className="block cursor-pointer px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                      >
                        Sign-In
                      </Link>
                    )}
                  </motion.div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <li className="flex justify-end ml-5">
            <Link to={"/profile"}>
              <button
                className={`lg:p-3 p-2 mr-2 border flex text-sm ${addListingBtn} hover:bg-primary hover:border-primaryDark hover:text-white  rounded-lg  flex-wrap gap-3  cursor-pointer transition-colors duration-300 ease-in-out`}
              >
                Add Listing <MdAddHomeWork className="text-xl" />
              </button>
            </Link>
          </li>
        </ul>

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
            <motion.aside
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-2/3 h-screen  bg-black/30 backdrop-blur-2xl  text-center"
            >
              <ul>
                <li className="p-4 text-4xl cursor-pointer">
                  <img src={LogoLight} alt="" className="w-1/2 object-fit" />
                </li>
                {navmenu.map((items) => (
                  <li
                    key={items.link}
                    className="p-4 text-4xl hover:text-primaryDark cursor-pointer transition-all ease-in duration-300"
                  >
                    <Link to={items.link}>{items.title}</Link>
                  </li>
                ))}
                {/********************************************** ACCOUNT Dropdown **********************************************/}

                <div className="relative border-t border-gray-700">
                  <div className="flex flex-col gap-2 justify-center items-center mt-4">
                    {currentUser ? (
                      <>
                        <img
                          src="https://source.unsplash.com/person"
                          alt="Profile"
                          className="h-14 w-14 rounded-md  border-2 border-primary focus:outline-none object-cover"
                        />
                        <span className="w-[30%] rounded-lg px-2 py-1 text-xs font-medium text-light bg-primary">
                          {currentUser ? currentUser.firstname : "N/A"}
                        </span>
                      </>
                    ) : (
                      <FaUserTie
                        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                        className={`relative
                   ${profileIconColor}
                   cursor-pointer z-10 transition-all duration-700 ease-in-out block h-14 w-14 rounded-md  overflow-hidden border-2 border-gray-600 focus:outline-none focus:bg-primaryLight hover:bg-primaryLight hover:text-white p-1`}
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/profile"
                      className="block text-gray-400 transition-all ease-in duration-300 hover:text-white"
                    >
                      Profile
                    </Link>
                    <Link
                      to={currentUser ? "/profile" : "/sign-in"}
                      className="block text-gray-400 transition-all ease-in duration-300 mt-2 hover:text-white"
                    >
                      Account Settings
                    </Link>
                    <Link
                      to=""
                      className="block text-gray-400 transition-all ease-in duration-300 mt-2 hover:text-white"
                    >
                      {currentUser ? (
                        <div
                          onClick={handleSignOut}
                          className="block text-gray-400 transition-all ease-in duration-300 hover:text-white"
                        >
                          Sign Out
                        </div>
                      ) : (
                        <Link
                          to="/sign-in"
                          className="block text-gray-400 transition-all ease-in duration-300 hover:text-white"
                        >
                          Sign in
                        </Link>
                      )}
                    </Link>
                  </div>
                </div>
              </ul>
            </motion.aside>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
