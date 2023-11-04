import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
const ForRent = () => {
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
                  <Link to={"/profile"}>
                    <li>Profile</li>
                  </Link>
                  <span>&#62;</span>
                  <Link to={"/profile/addlisting"}>
                    <li>Listing</li>
                  </Link>
                  <span>&#62;</span>
                  <li>For Rent</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Submit Property</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Dashboard Section ---------------- */}
      <div className="w-full flex-col space-y-10 bg-white-50 mx-auto flex items-center justify-center p-6">
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
            Property Information - FOR RENT
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="Property Title">Property Title*</label>
              <input
                type="text"
                placeholder="Title"
                className="bg-primary/10 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="Property Title">Slug*</label>
              <input
                type="text"
                placeholder="Here is demo text"
                className="bg-primary/10 p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="flex flex-col w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Property Type*</label>
                <input
                  type="text"
                  placeholder="Here is demo text"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Property Price*</label>
                <input
                  type="text"
                  placeholder="$50000.00"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="flex flex-col w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Total Area (Sq-Ft)</label>
                <input
                  type="text"
                  placeholder="Here is demo text"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Total Unit*</label>
                <input
                  type="number"
                  placeholder="$50000.00"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="flex flex-col w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Total Bedroom*</label>
                <input
                  type="number"
                  placeholder="2"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Total Bathroom*</label>
                <input
                  type="number"
                  placeholder="2"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="Property Title">Description*</label>
              <textarea
                placeholder="Add Some Description about your property"
                className="bg-primary/10 p-2 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
            Property Image
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="Property Title">
                First image will be the cover image. (max 6)*
              </label>
              <div className="mt-2 file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label onDragOver={(e) => e.preventDefault()}>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      id="images"
                      accept="image/*"
                      multiple
                    />
                    <div className="cursor-pointer">
                      <svg
                        className="text-primary w-24 mx-auto mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                  </label>

                  <div className="title text-primaryLight uppercase">
                    or drop files here <br /> and Upload
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
            Property Location
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="flex flex-col w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">City*</label>
                <input
                  type="text"
                  placeholder="Toronto"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Province*</label>
                <input
                  type="text"
                  placeholder="Ontario"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="flex flex-col w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Address Details*</label>
                <input
                  type="text"
                  placeholder="100 Main Street"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2 space-y-2">
                <label htmlFor="PropertyType">Google Map</label>
                <input
                  type="text"
                  placeholder="100 Main Street"
                  className="bg-primary/10 p-2 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex bg-indigo-900 text-white w-full m-0 p-4 rounded-t-lg">
            Amenities
          </div>
          <div className="flex flex-wrap p-4 space-y-4">
            <div className="flex flex-wrap md:gap-5 md:flex-row md:justify-evenly space-y-4 md:space-y-0">
              <div className="space-x-2">
                <div className="inline-flex items-center">
                  <div className="flex space-x-10 justify-evenly flex-wrap gap-4">
                    <label
                      htmlFor="check-box-1"
                      className="cursor-pointer relative"
                    >
                      <input
                        type="checkbox"
                        id="check-box-1"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-1 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      Parking
                    </label>
                    <label
                      htmlFor="check-box-2"
                      className="cursor-pointer relative"
                    >
                      <input
                        type="checkbox"
                        id="check-box-2"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-2 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      Furnished
                    </label>
                    <label
                      htmlFor="check-box-3"
                      className="cursor-pointer relative"
                    >
                      <input
                        type="checkbox"
                        id="check-box-3"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-3 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      A/C
                    </label>
                    <label
                      htmlFor="check-box-4"
                      className="cursor-pointer relative"
                    >
                      <input
                        type="checkbox"
                        id="check-box-4"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-4 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      Washer/Dryer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="p-4 bg-neutral rounded-md hover:bg-neutralDark transition-all duration-300 hover:scale-105">
            Create Listing
          </button>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default ForRent;
