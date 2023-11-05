import { FaEdit, FaEye, FaParking } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUserState } from "../../redux/userSlice/userSlice";
import { useEffect, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { TbAirConditioning } from "react-icons/tb";
import { LuSofa } from "react-icons/lu";

const MyProperties = () => {
  const [showListingsError, setShowListingsError] = useState<boolean>(false);
  const [userListings, setUserListings] = useState([]);

  //UPDATE USER SLICE
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(
    (state: { user: IUserState }) => state.user
  );

  ////// SHOW LISTINGS

  const fetchListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();

      if (data.success === false) {
        setShowListingsError(true);
        return;
      }
      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="flex flex-col flex-wrap w-full h-full space-y-3">
      <div className="flex flex-wrap font-bold justify-between items-start text-start">
        <h1>My Properties</h1>
        <Link to={"/profile/addlisting"}>
          <div className="p-3 bg-primaryLight rounded-lg text-white flex flex-wrap gap-3 hover:bg-primaryDark cursor-pointer transition-colors duration-300 ease-in-out">
            Add Listing +
          </div>
        </Link>
      </div>

      {userListings && userListings.length > 0 ? (
        userListings.map((listing: any) => (
          <div
            key={listing._id}
            className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center"
          >
            <div className="relative md:w-[25%] w-full ">
              <img
                className="rounded-md object-cover h-48 w-full"
                src={listing.imageUrls[0]}
                alt="Listing Image"
              />
              <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
                Active
              </div>
            </div>
            <div className="md:w-[68%] w-full  flex flex-col p-2 flex-wrap">
              <div className="flex justify-center">
                <h2 className="text-sm p-1 bg-neutral md:w-1/5 md:h-8 w-full rounded-lg text-center items-center ">
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
                <div className="flex">
                  <label htmlFor="amenities">
                    Amenities
                    {listing.amenityParking ? (
                      <FaParking className="text-2xl" />
                    ) : (
                      ""
                    )}
                    {listing.amenityAC ? (
                      <TbAirConditioning className="text-2xl" />
                    ) : (
                      ""
                    )}
                    {listing.amenityFurnished ? (
                      <LuSofa className="text-2xl" />
                    ) : (
                      ""
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="md:w-[5%] w-full items-center justify-evenly lg:justify-center text-center flex flex-row md:flex-col flex-wrap md:space-y-2">
              <div className="p-2 bg-primaryDark/40 hover:bg-primaryDark rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
                <FaEye />
              </div>
              <div className="p-2 bg-primaryDark/40 hover:bg-neutralDark rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
                <FaEdit />
              </div>
              <div className="p-2 bg-primaryDark/40 hover:bg-red-700 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
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
    </div>
  );
};

export default MyProperties;
