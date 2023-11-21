import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PriceRange from "../PriceRange";
import SquareFeet from "../SquareFeet";
import { Abstract11 } from "../../../assets";
import { Button } from "@material-tailwind/react";

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

const FilterListing = () => {
  return (
    <>
      <div className="flex-1">
        <div className="w-full flex bg-white rounded-md shadow-md items-center justify-center">
          <form className="w-[80%] px-2 py-8 flex flex-col space-y-5">
            <label htmlFor="Location" className="space-y-4">
              <span className="font-semibold">City</span>
              <select className="p-2 w-full flex rounded-sm bg-white border border-gray-400">
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Calgary">Calgary</option>
                <option value="Montreal">Montreal</option>
                <option value="Ottawa">Ottawa</option>
                <option value="Winnipeg">Winnipeg</option>
                <option value="Edmonton">Edmonton</option>
                <option value="QuebecCity">Quebec City</option>
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
                  4+ Rooms
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
                  3+ Bath
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
            <div className="flex justify-center items-center">
              <Button className="inline-block  font-semibold bg-primary hover:bg-primaryDark">
                Filter
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-initial">
        <div className="w-full flex items-center justify-center">
          <section
            className="w-full rounded-md px-2 py-8 flex flex-col "
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
    </>
  );
};

export default FilterListing;
