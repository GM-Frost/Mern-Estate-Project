import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosHeart,
  IoIosHeartEmpty,
} from "react-icons/io";
import { MdOutlineBathtub, MdOutlineKingBed } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IListing, IListingAgentDetails } from "../../types/ListingCard";
import { hostURI } from "../../../host";

interface IFilteredCard {
  layout: string;
  listings: IListing[];
}

const FilteredCard = ({ listings, layout }: IFilteredCard) => {
  const [isFavHovered, setFavIsHovered] = useState<number | null>(null);
  const [agentDetails, setAgentDetails] = useState<{
    [key: string]: IListingAgentDetails;
  }>({});

  ////////////---- PAGINATION FUNCTIONS -----/////////
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = listings.slice(firstIndex, lastIndex);
  const npages = Math.ceil(listings.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrentPage = (id: number) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const fetchAgentDetails = async (agentDetails: string) => {
      try {
        const response = await fetch(
          `${hostURI}/api/agent/listings/${agentDetails}`
        );
        if (response.ok) {
          const agentData = await response.json();
          setAgentDetails((prevDetails) => ({
            ...prevDetails,
            [agentDetails]: agentData,
          }));
        } else {
          console.error("Failed to fetch agent details");
        }
      } catch (error) {
        console.error("Error fetching agent details:", error);
      }
    };

    listings.forEach((property) => {
      fetchAgentDetails(property._id);
    });
  }, [listings]);

  return (
    <>
      {layout === "grid" ? (
        <>
          <div className="my-12 mx-auto w-full  md:w-[80%] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 overflow-y-auto">
            {listings.length > 0 ? (
              records.map((property, index) => (
                <div
                  key={property._id}
                  className="flex  group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <div className="flex w-full flex-col">
                    <div className="p-2">
                      <div className="relative">
                        <img
                          src={property.imageUrls[0]}
                          className="w-full h-48 object-cover "
                          alt="Property Image"
                        />
                        <div className="w-full  cursor-pointer px-5 absolute top-2 flex justify-between ">
                          <div
                            onMouseEnter={() => setFavIsHovered(index)}
                            onMouseLeave={() => setFavIsHovered(null)}
                            className="w-12 h-12  bg-white rounded-full flex items-center justify-center "
                          >
                            {isFavHovered === index ? (
                              <IoIosHeart className="text-3xl text-primaryDark " />
                            ) : (
                              <IoIosHeartEmpty className="text-3xl text-primary" />
                            )}
                          </div>
                          <div className="bg-white flex px-1 py-[2px] rounded-md justify-center items-center">
                            <div>
                              <img
                                src={property.agentProfile}
                                className="w-full h-10 object-cover rounded-md"
                                alt="Agent Image"
                              />
                            </div>
                            <div className="flex flex-col text-sm justify-center items-center px-2">
                              <h1 className="text-xs font-semibold">
                                {agentDetails[property._id]?.firstname +
                                  " " +
                                  agentDetails[property._id]?.lastname}
                              </h1>
                              <p className="text-xs text-primary ">Agent</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="flex justify-between items-center mt-4">
                          <p className="font-semibold text-primary text-xl">
                            {property.type === "Rent"
                              ? "$ " + property.regularPrice + "/Month"
                              : "$ " + property.regularPrice + ".00"}
                          </p>
                          <p
                            className={`p-2 ${
                              property.type === "Rent"
                                ? "bg-blue-400 text-white"
                                : "bg-neutral/50"
                            }  rounded-lg`}
                          >
                            {property.type}
                          </p>
                        </div>
                        <div className="mt-5 flex flex-col gap-3 py-5 border-b-2">
                          <h2 className="font-bold text-xl group-hover:text-primary transition-colors duration-300 ease-in-out">
                            <Link to={`/listing/${property._id}`}>
                              {property.title}
                            </Link>
                          </h2>
                          <div className="text-baseDark flex truncate gap-1 items-center text-left">
                            <div>
                              <HiOutlineLocationMarker className="text-primary " />
                            </div>
                            <p>
                              {property.addressLine}, {property.addressCity},{" "}
                              {property.addressProvince}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex gap-3 py-2 justify-evenly">
                          <div>
                            <p className="flex items-center gap-1">
                              <MdOutlineKingBed className="text-xl text-primary" />
                              {property.bedrooms} Rooms
                            </p>
                          </div>
                          <div>
                            <p className="flex items-center gap-1">
                              <MdOutlineBathtub className="text-xl text-primary" />
                              {property.bathrooms} Bath
                            </p>
                          </div>
                          <div>
                            <p className="flex items-center gap-1">
                              <RxDimensions className="text-xl text-primary" />
                              {property.totalArea} Sq.Ft
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex justify-center text-center">
                "No Listing Found"
              </p>
            )}
          </div>

          <nav className=" justify-center items-center mx-auto py-10">
            <ul className="flex justify-center items-center">
              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Previous"
                onClick={prevPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowBack />
                </span>
              </li>

              {numbers.map((number, index) => (
                <li
                  key={index}
                  className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${
                    currentPage === number
                      ? "from-primary to-primaryDark shadow-primaryDark/20 text-white"
                      : "border border-blue-gray-100 bg-transparent text-blue-gray-500"
                  }  p-0 text-sm  shadow-md  transition duration-150 ease-in-out hover:bg-primaryLight hover:text-white cursor-pointer`}
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </li>
              ))}

              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Next"
                onClick={nextPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div className="my-12 w-full  md:w-[80%]  mx-auto space-y-8">
            {listings.length > 0 ? (
              records.map((property, index) => (
                <div
                  key={property._id}
                  className="flex group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <div className="flex sm:flex-col md:flex-row w-full">
                    <div className="w-full md:w-2/5 p-2">
                      <div className="w-full h-64 relative overflow-hidden">
                        <img
                          src={property.imageUrls[0]}
                          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 rounded-md"
                          alt="Property Image"
                        />
                        <div className="w-full cursor-pointer px-5 absolute top-2 flex justify-between ">
                          <div
                            onMouseEnter={() => setFavIsHovered(index)}
                            onMouseLeave={() => setFavIsHovered(null)}
                            className="w-12 h-12  bg-white rounded-full flex items-center justify-center "
                          >
                            {isFavHovered === index ? (
                              <IoIosHeart className="text-3xl text-primaryDark " />
                            ) : (
                              <IoIosHeartEmpty className="text-3xl text-primary" />
                            )}
                          </div>
                          <div className="bg-white flex px-1 py-[2px] rounded-md justify-center items-center">
                            <div>
                              <img
                                src={property.agentProfile}
                                className="w-full h-10 object-cover rounded-md"
                                alt="Agent Image"
                              />
                            </div>
                            <div className="flex flex-col text-sm justify-center items-center px-2">
                              <h1 className="text-xs font-semibold">
                                {agentDetails[property._id]?.firstname +
                                  " " +
                                  agentDetails[property._id]?.lastname}
                              </h1>
                              <p className="text-xs text-primary ">Agent</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 flex flex-col items-center justify-center p-10">
                      <div className="flex w-full flex-col space-y-3 pb-5 border-b border-gray-200">
                        <div className="flex w-full justify-between items-center mt-4">
                          <p className="font-semibold text-primary text-xl">
                            {property.type === "Rent"
                              ? "$ " + property.regularPrice + "/Month"
                              : "$ " + property.regularPrice + ".00"}
                          </p>
                          <p
                            className={`p-2 ${
                              property.type === "Rent"
                                ? "bg-blue-400 text-white"
                                : "bg-neutral/50"
                            }  rounded-lg`}
                          >
                            {property.type}
                          </p>
                        </div>
                        <div className="text-center">
                          <Link to={`/listing/${property._id}`}>
                            <h2 className="font-bold text-xl group-hover:text-primary transition-colors duration-300 ease-in-out">
                              <Link to={`/listing/${property._id}`}>
                                {property.title}
                              </Link>
                            </h2>
                          </Link>
                        </div>
                        <div className="text-baseDark flex truncate gap-1 items-center text-center justify-center">
                          <div>
                            <HiOutlineLocationMarker className="text-primary " />
                          </div>
                          <p>
                            {property.addressLine}, {property.addressCity},{" "}
                            {property.addressProvince}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="w-full text-sm md:text-md mt-3 flex gap-3 py-2 justify-evenly">
                        <div>
                          <p className="flex items-center gap-1">
                            <MdOutlineKingBed className="text-xl text-primary" />
                            3{property.bedrooms} Rooms
                          </p>
                        </div>
                        <div>
                          <p className="flex items-center gap-1">
                            <MdOutlineBathtub className="text-xl text-primary" />
                            2{property.bedrooms} Bath
                          </p>
                        </div>
                        <div>
                          <p className="flex items-center gap-1">
                            <RxDimensions className="text-xl text-primary" />
                            {property.totalArea} Sq.Ft
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex justify-center text-center">
                "No Listing Found"
              </p>
            )}
          </div>
          <nav className=" justify-center items-center mx-auto py-10">
            <ul className="flex justify-center items-center">
              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Previous"
                onClick={prevPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowBack />
                </span>
              </li>
              {numbers.map((number, index) => (
                <li
                  key={index}
                  className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${
                    currentPage === number
                      ? "from-primary to-primaryDark shadow-primaryDark/20 text-white"
                      : "border border-blue-gray-100 bg-transparent text-blue-gray-500"
                  }  p-0 text-sm  shadow-md  transition duration-150 ease-in-out hover:bg-primaryLight hover:text-white cursor-pointer`}
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </li>
              ))}

              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Next"
                onClick={nextPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default FilteredCard;
