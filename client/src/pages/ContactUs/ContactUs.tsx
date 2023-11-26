import { Link } from "react-router-dom";
import {
  AbstractContactCS,
  AbstractContactus,
  AbstractContactusForm,
} from "../../assets";
import { BiMapPin, BiSolidPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import Layout from "../../components/Layout";
import DownloadApp from "../Homepage/DownloadApp";

import { motion } from "framer-motion";
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ContactUs = () => {
  return (
    <>
      <div
        className="relative min-h-[400px] bg-base-200 items-center text-white flex bg-cover bg-no-repeat bg-blend-overlay bg-black/60 justify-center flex-col"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/5016999/pexels-photo-5016999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-center ">
          <div className="max-w-md flex flex-col text-center justify-center items-center">
            <div className="text-sm text-yellow-700 ">
              <p className="py-6">
                <ul className="flex justify-center items-center gap-3">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <span>&#62;</span>
                  <li>Contact Us</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Contact Us</h1>
          </div>
        </div>
      </div>
      {/** ----------------- CONTACT SECTION BEGINS ------------ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="py-16 h-screen w-full flex  items-center justify-center"
        style={{
          backgroundImage: `url(${AbstractContactus})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className="flex flex-col w-[90%] lg:w-[80%] md:flex-row justify-center items-center md:space-x-10">
          <div
            style={{
              backgroundImage: `url(${AbstractContactusForm})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
              backgroundColor: "rgba(113,102,240, 1)",
            }}
            className=" text-white p-4 rounded-lg w-full"
          >
            <h1 className="font-semibold text-xl">Contact Now</h1>
            <form action="" className="padding-3 flex flex-col space-y-4">
              <motion.div
                whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{ duration: 1.0 }}
                className="w-full mt-5"
              >
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-transparent border border-gray-50 p-3 w-full rounded-lg focus:border-neutral"
                />
              </motion.div>

              <motion.div
                whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{ duration: 1.0 }}
                className="w-full mt-5"
              >
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="bg-transparent border border-gray-50 p-3 w-full rounded-lg focus:border-neutral"
                />
              </motion.div>
              <motion.div
                whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{ duration: 1.0 }}
                className="w-full mt-5"
              >
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-transparent border border-gray-50 p-3 w-full rounded-lg focus:border-neutral"
                />
              </motion.div>
              <motion.div
                whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{ duration: 1.0 }}
                className="w-full mt-5"
              >
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="bg-transparent border border-gray-50 p-3 w-full rounded-lg focus:border-neutral"
                />
              </motion.div>
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="w-full mt-5 flex justify-center items-center"
              >
                <button className="p-2 bg-neutral hover:bg-neutralDark rounded-lg text-dark hover:scale-105 transition-transform ease-in-out duration-300">
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <motion.img
              src={AbstractContactCS}
              alt="Customer Care"
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="rounded-md h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="py-16  w-full flex  justify-center"
      >
        <div className="w-[80%]">
          <div className="flex lg:flex-row flex-col gap-3 bg-primaryLight/10 rounded-lg p-5 justify-evenly items-center w-full">
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="flex items-center  w-full justify-evenly"
            >
              <div className="rounded-full flex  justify-center  items-center text-center bg-primary/10 p-2 h-20 w-20">
                <BiSolidPhoneCall className="text-primaryDark text-4xl flex justify-center items-center" />
              </div>
              <div className="flex flex-col space-y-3 items-center text-center justify-center">
                <p className="text-baseLight">Contact Information</p>
                <h1 className="font-semibold">+1 123 456 789</h1>
              </div>
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="flex items-center  w-full justify-evenly"
            >
              <div className="rounded-full flex  justify-center  items-center text-center bg-primary/10 p-2 h-20 w-20">
                <BiMapPin className="text-primaryDark text-4xl flex justify-center items-center" />
              </div>
              <div className="flex flex-col space-y-3 items-center text-center justify-center">
                <p className="text-baseLight">Location</p>
                <h1 className="font-semibold">Toronto, ON, Canada</h1>
              </div>
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="flex items-center  w-full justify-evenly"
            >
              <div className="rounded-full flex  justify-center  items-center text-center bg-primary/10 p-2 h-20 w-20">
                <MdMarkEmailRead className="text-primaryDark text-4xl flex justify-center items-center" />
              </div>
              <div className="flex flex-col space-y-3 items-center text-center justify-center">
                <p className="text-baseLight">Email</p>
                <h1 className="font-semibold">example@gmail.com</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <div className="pt-15 flex justify-center items-center mx-auto">
        <div className="w-[90%]">
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.6741008662!2d-79.54286523157796!3d43.71812280445452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1699405750926!5m2!1sen!2sca"
              width="100%"
              height="80%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "80%",
                border: 0,
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <DownloadApp />
      <Layout />
    </>
  );
};

export default ContactUs;
