import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineBathtub, MdOutlineKingBed } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { Link } from "react-router-dom";

interface IFilteredCard {
  layout: string;
  listings: any[];
}
const FilteredCard = ({ layout, listings }: IFilteredCard) => {
  const [isFavHovered, setFavIsHovered] = useState<number | null>(null);
  const [agentDetails, setAgentDetails] = useState<any>({});

  useEffect(() => {
    const fetchAgentDetails = async (agentDetails: string) => {
      try {
        const response = await fetch(
          `http://localhost:5173/api/agent/listings/${agentDetails}`
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
        <div className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4">
          {listings.map((property, index) => (
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
                        <Link to={""}>{property.title}</Link>
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
                          <MdOutlineBathtub className="text-xl text-primary" />2
                          {property.bathrooms} Bathrooms
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
          ))}
        </div>
      ) : (
        <div className="my-12 w-full  md:w-[80%]  mx-auto space-y-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex sm:flex-col md:flex-row w-full">
                <div className="w-full md:w-2/5 p-2">
                  <div className="w-full h-64 relative overflow-hidden">
                    <img
                      src="https://source.unsplash.com/random"
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
                            src="https://source.unsplash.com/random"
                            className="w-full h-10 object-cover rounded-md"
                            alt="Agent Image"
                          />
                        </div>
                        <div className="flex flex-col text-sm justify-center items-center px-2">
                          <h1 className="text-xs font-semibold">Agent Name</h1>
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
                        $976 /month
                      </p>
                      <p className="p-2 bg-neutral/50 rounded-lg">Sale</p>
                    </div>
                    <div className="text-center">
                      <h1 className="text-xl font-bold capitalize">
                        Northwest Office Space
                      </h1>
                    </div>
                    <div className="text-baseDark flex truncate gap-1 items-center text-center justify-center">
                      <div>
                        <HiOutlineLocationMarker className="text-primary " />
                      </div>
                      <p>1901 Thornridge Cir. Shilo Shilo Shilo</p>
                    </div>
                  </div>
                  <div className="w-full text-sm md:text-md mt-3 flex gap-3 py-2 justify-evenly">
                    <div>
                      <p className="flex items-center gap-1">
                        <MdOutlineKingBed className="text-xl text-primary" />3
                        Rooms
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1">
                        <MdOutlineBathtub className="text-xl text-primary" />2
                        Bath
                      </p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1">
                        <RxDimensions className="text-xl text-primary" />
                        425 Sq.Ft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FilteredCard;
