import { useState } from "react";
import {
  BiHeart,
  BiHome,
  BiLock,
  BiLogOut,
  BiSolidDashboard,
  BiUser,
} from "react-icons/bi";
import Dashboard from "../components/Profile/Dashboard";
import MyProperties from "../components/Profile/MyProperties";

const ProfileDash = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

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
                    <a>Home</a>
                  </li>
                  <span>&#62;</span>
                  <li>Profile</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Dashboard</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Dashboard Section ---------------- */}
      <div className="w-full bg-indigo-50 mx-auto flex items-center justify-center p-6">
        <div className="bg-white rounded-md shadow-md p-4 w-full md:w-[80%]">
          <div className="flex flex-col md:flex-row">
            <div className="leftside sm:w-30 md:w-1/4 p-2 flex items-center justify-center">
              <div className="flex flex-col w-full md:justify-start sm:justify-center sm:items-center bg-primary/10 h-full overflow-y-auto">
                <ul className="text-center items-center w-full text-baseLight">
                  <li
                    onClick={() => handleItemClick("Dashboard")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "Dashboard" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "Dashboard"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiSolidDashboard />
                    </div>
                    Dashboard
                  </li>
                  <li
                    onClick={() => handleItemClick("MyProperties")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "MyProperties" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "MyProperties"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiHome />
                    </div>
                    My Properties
                  </li>
                  <li
                    onClick={() => handleItemClick("PersonalInfo")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "PersonalInfo" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "PersonalInfo"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiUser />
                    </div>
                    Personal Info
                  </li>
                  <li
                    onClick={() => handleItemClick("mySaved")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "mySaved" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "mySaved"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiHeart />
                    </div>
                    Saved
                  </li>
                  <li
                    onClick={() => handleItemClick("changePassword")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "changePassword" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "changePassword"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiLock />
                    </div>
                    Change Password
                  </li>
                  <li
                    onClick={() => handleItemClick("logout")}
                    className={`flex w-full items-center gap-3 p-6 border-b-[1px] border-gray-300 group hover:text-black group-hover:border-primaryDark  transition-colors duration-400 ease-in-out cursor-pointer ${
                      selectedItem === "logout" ? "text-black " : ""
                    }`}
                  >
                    <div
                      className={` text-baseDark rounded-full p-1 text-2xl group-hover:text-white group-hover:bg-primaryDark transition-colors duration-400 ease-in-out ${
                        selectedItem === "logout"
                          ? "bg-primaryDark text-white "
                          : "bg-[#dcdafa]"
                      }`}
                    >
                      <BiLogOut />
                    </div>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightside h-auto overflow-y-scroll sm:w-70 md:w-3/4 p-2 flex items-center justify-center">
              {selectedItem === "Dashboard" && <Dashboard />}
              {selectedItem === "MyProperties" && <MyProperties />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDash;
