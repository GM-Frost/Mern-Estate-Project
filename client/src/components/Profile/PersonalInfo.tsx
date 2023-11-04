import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col flex-wrap w-full h-full space-y-3">
      <div className="font-bold">
        <h1>Personal Info</h1>
      </div>

      <div className="sm:flex-row gap-5 md:flex">
        <img
          className="h-[200px] object-cover w-full md:w-1/3 rounded-md"
          src="https://source.unsplash.com/random"
          alt="Profile Picture"
        />
        <div className="sm:flex sm:flex-col items-center justify-center">
          <h2 className="font-bold">Wade De Warren</h2>
          <div className="text-sm text-baseLight">Real Estate broker</div>
          <div className="mt-5 flex flex-col gap-2">
            <div className="flex gap-2">
              <FiPhoneCall className=" text-primary  text-xl" /> +1 985-596-7777
            </div>
            <div className="flex  gap-2">
              <FaEnvelope className=" text-primary text-xl" />{" "}
              Youremail@gmail.com
            </div>
            <div className="flex  gap-2">
              <FaMapMarkerAlt className=" text-primary text-xl" /> 2972
              Westheimer Rd. Santa Ana, Illinois 85486
            </div>
            <div className="flex space-x-20 mt-3 items-center text-center justify-center">
              <FaPhone /> <FaLinkedin /> <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 p-4 rounded-lg flex-wrap">
        <h1 className="font-bold">About Me</h1>
        <p className="mt-4 text-sm ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority to have suffered alteration in some form, by injected
          humor. Ipsum available, but the a majority have suffered alteration in
          some form.
        </p>
      </div>
      <div className="justify-end items-end flex">
        <button className="p-4 bg-neutral items-center justify-center text-center rounded-md hover:bg-yellow-600 transition-colors duration-500 ease-in-out">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
