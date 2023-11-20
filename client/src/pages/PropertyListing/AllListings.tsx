import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { Button } from "@material-tailwind/react";
import { MdList, MdOutlineDashboard } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import PriceRange from "./PriceRange";
import SquareFeet from "./SquareFeet";
import Slider from "react-slick";
import { Abstract11 } from "../../assets";

const AllListings = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
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
      {/*--------------------- Search Section ---------------- */}
      <div className="w-full bg-primary/5 flex-col space-y-10 bg-white-50 mx-auto flex items-center justify-center p-6">
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
        {/*--------------------- Content Section ---------------- */}

        <div className="flex w-[90%] flex-col lg:flex-row justify-center items-center gap-20">
          <div className="w-full flex flex-col lg:w-2/4 gap-6">
            <div className="w-full flex bg-white rounded-md shadow-md items-center justify-center">
              <form className="w-[80%] px-2 py-8 flex flex-col space-y-5">
                <label htmlFor="Location" className="space-y-4">
                  <span className="font-semibold">City</span>
                  <select className="p-2 w-full flex rounded-sm bg-white border border-gray-400">
                    <option value="Tononto">Toronto</option>
                    <option value="Tononto">Vancouver</option>
                    <option value="Tononto">Calgary</option>
                    <option value="Tononto">Ottawa</option>
                    <option value="Tononto">Montreal</option>
                    <option value="Tononto">Edmonton</option>
                  </select>
                </label>
                <label htmlFor="PropertyType" className="space-y-4">
                  <span className="font-semibold">Property Type</span>
                  <select className="p-2 w-full flex rounded-sm bg-white border border-gray-400">
                    <option value="Tononto">House</option>
                    <option value="Tononto">Condo</option>
                    <option value="Tononto">Apartment</option>
                  </select>
                </label>
                <label htmlFor="TotalBedrooms" className="space-y-4">
                  <span className="font-semibold">Total Bedrooms</span>
                  <div className="grid grid-cols-2  items-center  gap-4">
                    <label
                      htmlFor="rooms1"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="rooms1"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-rooms1 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      1 Room
                    </label>
                    <label
                      htmlFor="rooms2"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="rooms2"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-rooms2 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      2 Rooms
                    </label>
                    <label
                      htmlFor="rooms3"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="rooms3"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-rooms3 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      3 Rooms
                    </label>
                    <label
                      htmlFor="rooms4"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="rooms4"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-rooms4 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      4 Rooms
                    </label>
                    <label
                      htmlFor="rooms5"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="rooms5"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-rooms5 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      5+
                    </label>
                  </div>
                </label>
                <label htmlFor="TotalBathrooms" className="space-y-4">
                  <span className="font-semibold">Total Bathrooms</span>
                  <div className="grid grid-cols-1 lg:grid-cols-2  items-center  gap-4">
                    <label
                      htmlFor="bathroom1"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="bathroom1"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-bathroom1 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      1 Bath
                    </label>
                    <label
                      htmlFor="bathroom2"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="bathroom2"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-bathroom2 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      2 Bath
                    </label>
                    <label
                      htmlFor="bathroom3"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="bathroom3"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-bathroom3 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      3 Bath
                    </label>
                    <label
                      htmlFor="bathroom4"
                      className="cursor-pointer relative flex gap-3"
                    >
                      <input
                        type="checkbox"
                        id="bathroom4"
                        className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="check-bathroom4 h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition"
                      />{" "}
                      4 +
                    </label>
                  </div>
                </label>
                <label htmlFor="PriceRange" className="space-y-4">
                  <span className="font-semibold">Price Range</span>
                  <PriceRange />
                </label>
                <label htmlFor="SquareFeetRange" className="space-y-4">
                  <span className="font-semibold">Square Feet</span>
                  <SquareFeet />
                </label>
              </form>
            </div>
            <div className="w-full flex  items-center justify-center">
              <section
                className="w-[80%] rounded-md px-2 py-8 flex flex-col space-y-5"
                style={{
                  backgroundImage: `url(${Abstract11})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(113,102,240, 1)",
                }}
              >
                <h1 className=" text-white font-bold px-5 ">Our Broker List</h1>
                <div className="m-auto w-[80%] py-10">
                  <Slider {...settings}>
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      >
                        <div className="flex w-full flex-col">
                          <img
                            src="https://source.unsplash.com/random"
                            className="w-full h-48 object-cover rounded-t-md"
                            alt="Property Image"
                          />
                          <div className="p-3">
                            <div className="mt-5 flex flex-col gap-3">
                              <h2 className="font-semibold text-2xl group-hover:text-primaryDark transition-colors duration-300 ease-in-out">
                                <Link to={""}>Ester Holland</Link>
                              </h2>
                              <div className="text-baseLight items-center text-left">
                                <p>Real Estate Agent</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>
            </div>
          </div>

          <div className="w-full flex lg:w-1/4">Rigth</div>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default AllListings;
