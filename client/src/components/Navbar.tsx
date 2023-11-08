import { LogoLight, LogoDark } from "../assets";
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

import LoginModal from "./Navbar/LoginModal";

import "react-toastify/dist/ReactToastify.css";
import { FaUserTie } from "react-icons/fa";

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
    } catch (error) {
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
        setColor(isNotHeroNav ? "white" : "transparent");
        setTextColor(isNotHeroNav ? "black" : "#ffffff");
        setLogo(isNotHeroNav ? `${LogoDark}` : `${LogoLight}`);
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
      link: "/property",
      title: "Property",
    },
    {
      link: "/news",
      title: "News",
    },
    {
      link: "/contactus",
      title: "Contact US",
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
        <ul className="hidden md:flex" style={{ color: `${textColor}` }}>
          {navmenu.map((items) => (
            <li
              key={items.title}
              className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-primary after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer"
            >
              <Link to={items.link}>{items.title}</Link>
            </li>
          ))}
        </ul>
        {/********************************************** ACCOUNT Dropdown **********************************************/}

        <div className="mr-6">
          <div className="relative">
            {currentUser ? (
              <button
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
                className="relative z-10 transition-all duration-700 ease-in-out block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-primaryLight hover:border-primaryLight"
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
                className="relative cursor-pointer z-10 transition-all duration-700 ease-in-out block h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-primaryLight"
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
                      <span className="inline-flex items-center rounded-lg px-2 py-1 text-xs font-medium text-light bg-primary ">
                        {currentUser ? currentUser.firstname : "N/A"}
                      </span>
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                  >
                    Account Setting
                  </a>
                  {currentUser ? (
                    <a
                      onClick={handleSignOut}
                      className="block cursor-pointer px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                    >
                      Sign Out
                    </a>
                  ) : (
                    <a
                      onClick={openSigninModal}
                      className="block cursor-pointer px-4 py-2 text-baseDark hover:bg-extraLight hover:text-primary transition-all duration-200 ease-in-out"
                    >
                      Sign-In
                    </a>
                  )}
                </motion.div>
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
