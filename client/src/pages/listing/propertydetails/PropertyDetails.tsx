import { Tooltip } from "@material-tailwind/react";
import { BiCctv, BiSolidDryer } from "react-icons/bi";
import { BsThermometerSnow } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaBed, FaParking, FaShower, FaSwimmer } from "react-icons/fa";
import { GiWifiRouter } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { TbAirConditioning, TbWashMachine } from "react-icons/tb";

const PropertyDetails = ({ listing }) => {
  return (
    <div className="space-y-5">
      <div>{listing.description}</div>
      <div className="text-lg">
        <h1 className="text-lg font-bold text-primaryDark">
          Additional Details
        </h1>
        <div className="mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Total Area:</p>
              <p>{listing.totalArea} Sq.ft</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Total Unit:</p>
              <p>{listing.totalUnit}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Discounted Price:</p>
              <p>${listing.discountPrice}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Bedrooms:</p>
              <p>{listing.bedrooms}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Bathrooms:</p>
              <p>{listing.bathrooms}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Kitchen:</p>
              <p>{listing.kitchen}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Parking:</p>
              <p>{listing.amenityParking ? "Yes" : "No"}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Furnished:</p>
              <p>{listing.amenityFurnished ? "Yes" : "No"}</p>
            </div>
            <div className="flex justify-evenly">
              <p className="font-semibold text-gray-800">Type:</p>
              <p>For {listing.type}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg">
        <h1 className="text-lg font-bold text-primaryDark">Amenities</h1>
        <div className="mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
            <div className="flex justify-evenly">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
