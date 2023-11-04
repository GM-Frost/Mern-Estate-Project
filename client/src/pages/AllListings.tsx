import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "@material-tailwind/react";
import { MdList, MdOutlineDashboard, MdSpaceDashboard } from "react-icons/md";
import { FaRegListAlt, FaThList } from "react-icons/fa";

const AllListings = () => {
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
                  <Link to={"/"}>
                    <li>Home</li>
                  </Link>
                  <span>&#62;</span>
                  <li>Latest Properties</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Latest Properties</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Dashboard Section ---------------- */}
      <div className="w-full flex-col space-y-10 bg-white-50 mx-auto flex items-center justify-center p-6">
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex flex-col md:flex-row space-x-5  items-center justify-between">
            <div className="p-3">
              <div>
                <div className=" p-2  bg-gray-100 rounded-lg  items-center justify-center text-center">
                  <label>
                    <input
                      type="text"
                      placeholder="Search Properties..."
                      className="  bg-gray-100 w-56 placeholder:text-primary text-primary mr-2 p-2"
                    />
                    <Button className="inline-block font-semibold bg-primary hover:bg-primaryDark">
                      Search Now
                    </Button>
                  </label>
                </div>
              </div>
            </div>
            <div className=" text-baseLight p-4">
              Showing <span className="text-dark">1-2</span> of{" "}
              <span className="text-dark">17</span> results
            </div>
            <div className="hidden md:flex gap-3 items-center text-center p-4 ">
              <div className="bg-primaryLight text-white rounded-md p-1">
                <MdOutlineDashboard className="text-2xl" />
              </div>
              <div className="bg-primaryLight text-white rounded-md p-1">
                <MdList className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default AllListings;
