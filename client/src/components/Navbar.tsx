import { LogoLight, LogoDark } from "../assets";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logo, setLogo] = useState(`${LogoLight}`);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLogo(`${LogoDark}`);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogo(`${LogoLight}`);
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
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-4 text-center justify-center relative text-xl w-fit block after:block hover:text-cyan-500 after:content-[''] after:absolute after:h-[2px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:left-1/2 after:-translate-x-1/2 cursor-pointer">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>

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
                ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-2/3 h-screen  bg-backdrop backdrop-blur-2xl  text-center ease-in duration-300"
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
                <Link to="/profile">Profile</Link>
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
