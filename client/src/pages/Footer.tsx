import { Button } from "@material-tailwind/react";
import {
  Abstract8,
  Building1,
  Building2,
  Building3,
  LogoLight,
} from "../assets";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaSimplybuilt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div
        className="bg-black bg-opacity-80"
        style={{
          backgroundImage: `url(${Building3})`,
          backgroundBlendMode: "soft-light",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto p-4 max-w-screen-xl">
          <footer className="footer mx-auto flex flex-col p-10 text-neutral-content">
            <div className="w-full flex flex-col md:flex-row justify-between text-gray-500 bg-white p-4 rounded-lg">
              <div className="w-full md:w-2/3 ">
                <div className="space-y-2">
                  <p className="text-primary">For Rent and Sell Offer</p>
                  <h1 className="text-2xl font-bold text-black ">
                    Join the Nova Community
                  </h1>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className=" p-2  bg-gray-100 rounded-lg  items-center justify-center text-center">
                  <label>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className="  bg-gray-100 placeholder:text-cyan-500 text-cyan-500 mr-2 p-2"
                    />
                    <Button className="inline-block bg-cyan-400 hover:bg-cyan-600">
                      Subscribe Now
                    </Button>
                  </label>
                </div>
              </div>
            </div>
            <div className="footer ">
              <aside>
                <img src={LogoLight} alt="Nova Real Estate" className=" w-52" />
                <p>
                  <br />
                  Providing reliable Real Estate Service since 1992
                </p>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors ease-in-out duration-300" />
                  </a>
                  <a>
                    <FaTwitter className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors ease-in-out duration-300" />
                  </a>
                  <a>
                    <FaYoutube className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors ease-in-out duration-300" />
                  </a>
                  <a>
                    <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors ease-in-out duration-300" />
                  </a>
                </div>
              </aside>
              <nav>
                <header className="footer-title">Listings</header>
                <a className="link link-hover">- Properties</a>
                <a className="link link-hover">- Add Properties</a>
                <a className="link link-hover">- Login</a>
                <a className="link link-hover">- Signup</a>
              </nav>
              <nav>
                <header className="footer-title">Importants</header>
                <a className="link link-hover">- About Us</a>
                <a className="link link-hover">- Pricing</a>
                <a className="link link-hover">- Blog</a>
                <a className="link link-hover">- FAQ's</a>
              </nav>
              <nav>
                <header className="footer-title">Contact Us</header>
                <a className="link link-hover flex gap-2">
                  <FaPhone /> +1 (666)-666-6666
                </a>
                <a className="link link-hover flex gap-2">
                  <FaEnvelope />
                  nayanbastola777@gmail.com
                </a>
                <a className="link link-hover flex gap-2">
                  <FaLocationArrow />
                  Toronto, Canada
                </a>
                <a className="link link-hover flex gap-2">
                  <FaSimplybuilt />
                  Developed by Nayan Bastola
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </div>
      <footer className="footer px-10 py-4  bg-black text-gray-500 border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            &#169; {new Date().getFullYear()} All rights reserved by Nova Real
            Estate (Nayan Bastola)
          </p>
        </aside>
        <div>
          <p>About Company | Contact Us</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
