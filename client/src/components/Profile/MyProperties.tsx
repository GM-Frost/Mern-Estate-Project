import {
  FaBed,
  FaEdit,
  FaEye,
  FaParking,
  FaShower,
  FaSwimmer,
} from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUserState } from "../../redux/userSlice/userSlice";
import { useEffect, useState } from "react";

import { TbAirConditioning, TbWashMachine } from "react-icons/tb";
import { LuSofa } from "react-icons/lu";
import { GiWifiRouter } from "react-icons/gi";
import { Tooltip } from "@material-tailwind/react";
import { BsThermometerSnow } from "react-icons/bs";
import { BiCctv, BiSolidDryer } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { hostURI } from "../../host";

const MyProperties = () => {
  const [showListingsError, setShowListingsError] = useState<boolean>(false);
  const [loadingListing, setLoadingListing] = useState<boolean>(true);
  const [userListings, setUserListings] = useState([]);

  const { currentUser } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  ////// SHOW LISTINGS

  const fetchListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(
        `${hostURI}/api/user/listings/${currentUser._id}`
      );
      const data = await res.json();

      if (data.success === false) {
        setLoadingListing(false);
        setShowListingsError(true);
        return;
      }
      setUserListings(data);
      setLoadingListing(false);
    } catch (error) {
      setShowListingsError(true);
      setLoadingListing(false);
    }
  };

  const handleDeleteListing = async (listingId: string) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setUserListings((prev: any) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prev.filter((listing: any) => listing._id !== listingId)
      );
      toast.info("Listing deleted");
    } catch (error) {
      toast.error("Failed to delete listing");
      console.log(error);
    }
  };

  ////////////---- PAGINATION FUNCTIONS -----/////////

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = userListings.slice(firstIndex, lastIndex);
  const npages = Math.ceil(userListings.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCurrentPage = (id: any) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col flex-wrap w-full h-full space-y-3">
        <div className="flex flex-wrap font-bold justify-between items-start text-start ">
          <h1>My Properties</h1>
          <Link to={"/profile/addlisting"}>
            <div className="lg:p-3 p-2 mr-2 bg-primaryLight rounded-lg text-white flex flex-wrap gap-3 hover:bg-primaryDark cursor-pointer transition-colors duration-300 ease-in-out">
              Add Listing +
            </div>
          </Link>
        </div>
        <p className="text-red-700 text-sm">{showListingsError || ""}</p>
        {loadingListing ? (
          "Loading Listing..."
        ) : (
          <>
            {userListings.length > 0 ? (
              records.map((listing: any) => (
                <div
                  key={listing._id}
                  className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center"
                >
                  <div className="relative md:w-[25%] w-full ">
                    <Link to={`/listing/${listing._id}`}>
                      <img
                        className="rounded-md object-cover h-48 w-full cursor-pointer"
                        src={listing.imageUrls[0]}
                        alt="Listing Image"
                      />
                    </Link>
                    <div className="absolute -top-4 -right-4  text-white bg-green-500 p-2">
                      Active
                    </div>
                  </div>
                  <div className="md:w-[68%] w-full  flex flex-col p-2 flex-wrap">
                    <div className="flex justify-center">
                      <h2
                        className={`text-sm p-1 ${
                          listing.type === "Sale"
                            ? "bg-neutral text-black"
                            : "bg-blue-600 text-white"
                        } md:w-1/5 md:h-8 w-full rounded-lg text-center items-center`}
                      >
                        For {listing.type}
                      </h2>
                    </div>
                    <div className="mt-2 space-y-3">
                      <h1 className="font-bold">{listing.title}</h1>
                      <div>
                        {listing.addressLine}, {listing.addressCity},{" "}
                        {listing.addressProvince}
                      </div>
                      <div>
                        Property Type:{" "}
                        <span className="font-bold text-primaryDark">
                          {listing.propertyType}
                        </span>
                      </div>
                      <div>
                        <label htmlFor="amenities">
                          Amenities
                          <div className="flex lg:flex-row flex-wrap space-x-3 my-3">
                            {listing.bedrooms ? (
                              <Tooltip
                                content="Bedrooms"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <FaBed className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityFurnished ? (
                              <Tooltip
                                content="Furnished"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <LuSofa className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.bathrooms ? (
                              <Tooltip
                                content="Bathrooms"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <FaShower className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityWifi ? (
                              <Tooltip
                                content="Wifi"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <GiWifiRouter className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityAC ? (
                              <Tooltip
                                content="Cooling"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <TbAirConditioning className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityHeating ? (
                              <Tooltip
                                content="Heating"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <BsThermometerSnow className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityWasher ? (
                              <Tooltip
                                content="Washer"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <TbWashMachine className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityDryer ? (
                              <Tooltip
                                content="Dryer"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <BiSolidDryer className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityGym ? (
                              <Tooltip
                                content="Gym Access"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <CgGym className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenitySwimming ? (
                              <Tooltip
                                content="Swimming Pool"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <FaSwimmer className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenitySecurity ? (
                              <Tooltip
                                content="Security"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <BiCctv className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                            {listing.amenityParking ? (
                              <Tooltip
                                content="Parking"
                                placement="top"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <div>
                                  <FaParking className="text-lg md:text-2xl" />
                                </div>
                              </Tooltip>
                            ) : (
                              ""
                            )}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-[5%] w-full items-center justify-evenly lg:justify-center text-center flex flex-row md:flex-col flex-wrap md:space-y-2">
                    <Link to={`/listing/${listing._id}`}>
                      <div className="p-2 bg-primaryDark/40 hover:bg-primaryDark rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
                        <FaEye />
                      </div>
                    </Link>
                    <div className="p-2 bg-primaryDark/40 hover:bg-neutralDark rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
                      <Link to={`/update-listing/${listing._id}`}>
                        <FaEdit />
                      </Link>
                    </div>
                    <div
                      onClick={() => handleDeleteListing(listing._id)}
                      className="p-2 bg-primaryDark/40 hover:bg-red-700 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300"
                    >
                      <RiDeleteBin5Fill />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="flex justify-center text-center">
                "You have no Listings"
              </p>
            )}
            <nav className="flex justify-center items-center mx-auto py-10">
              <ul className="flex">
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
      </div>
    </>
  );
};

export default MyProperties;
