import { Button } from "@material-tailwind/react";
import { Building3, LogoLight } from "../assets/index.js";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaSimplybuilt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col md:flex-row justify-between text-gray-500 bg-white p-4 rounded-lg"
            >
              <div className="w-full md:w-2/3 ">
                <div className="space-y-2">
                  <p className="text-primary">For Rent and Sell Offer</p>
                  <h1 className="text-2xl font-bold text-baseDark">
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
                      className="  bg-gray-100 w-56 placeholder:text-primary text-primary mr-2 p-2"
                    />
                    <Button className="inline-block bg-primary hover:bg-primaryDark">
                      Subscribe Now
                    </Button>
                  </label>
                </div>
              </div>
            </motion.div>
            <div className="footer text-baseLight">
              <footer className="flex flex-col items-center bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
                <div className="container p-6">
                  <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
                    <div className="mb-6">
                      <img
                        src={LogoLight}
                        alt="Nova Real Estate"
                        className=" w-52"
                      />
                      <p>
                        <br />
                        Providing reliable Real Estate Service since 1992
                      </p>
                      <header className="my-5 footer-title text-baseLight">
                        Social
                      </header>
                      <div className="grid grid-flow-col gap-4 text-baseLight">
                        <a>
                          <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-primaryLight transition-colors ease-in-out duration-300" />
                        </a>
                        <a>
                          <FaTwitter className="w-5 h-5 cursor-pointer hover:text-primaryLight transition-colors ease-in-out duration-300" />
                        </a>
                        <a>
                          <FaYoutube className="w-5 h-5 cursor-pointer hover:text-primaryLight transition-colors ease-in-out duration-300" />
                        </a>
                        <a>
                          <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-primaryLight transition-colors ease-in-out duration-300" />
                        </a>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                        Listings
                      </h5>

                      <ul className="mb-0 list-none">
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - Properties
                          </a>
                        </li>
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - Add Properties
                          </a>
                        </li>
                        <a className="hover:text-light cursor-pointer">
                          - Login
                        </a>
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - Signup
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                        Importants
                      </h5>

                      <ul className="mb-0 list-none">
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - About Us
                          </a>
                        </li>
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - Pricing
                          </a>
                        </li>
                        <a className="hover:text-light cursor-pointer">
                          - Blog
                        </a>
                        <li>
                          <a className="hover:text-light cursor-pointer">
                            - FAQ's
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                        Contact Us
                      </h5>

                      <ul className="mb-0 list-none">
                        <li>
                          <a className="flex gap-2">
                            <FaPhone /> +1 (666)-666-6666
                          </a>
                        </li>
                        <li>
                          <a className="flex gap-2">
                            <FaEnvelope />
                            nayanbastola777@gmail.com
                          </a>
                        </li>
                        <li>
                          <a className="flex gap-2">
                            <FaLocationArrow />
                            Toronto, Canada
                          </a>
                        </li>
                        <li>
                          <a className="flex gap-2">
                            <FaSimplybuilt />
                            Developed by Nayan Bastola
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </footer>
        </div>
      </div>
      <footer className="footer px-10 py-4  bg-black text-gray-500 border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            &#169; {new Date().getFullYear()} All rights reserved by Nova Real
            Estate (Developer @ Nayan Bastola)
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
