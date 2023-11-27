import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineBathtub, MdOutlineKingBed } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { AbstractLatestProperty } from "../../assets/index.js";
import { useEffect, useState } from "react";

import { IPropertyList } from "../types/PropertyList.types";
import LoadingState from "../../components/Loading/LoadingState";

import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const LatestProperty: React.FC = () => {
  const [latestProperties, setLatestProperties] = useState<IPropertyList[]>([]);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchListings = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://nova-estate-server.onrender.com/api/listing/get?sortBy=createdAt&limit=6`
      );
      console.log("Response status:", response.status); // Log response status
      if (response.ok) {
        const data = await response.json();
        console.log("Data received:", data); // Log received data
        setLatestProperties(data);
      } else {
        console.error("Failed to fetch listings:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <section
      className="py-16 min-h-screen w-full flex"
      style={{
        backgroundImage: `url(${AbstractLatestProperty})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="mx-auto w-[90%] mt-10">
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="flex  flex-col justify-center items-center space-y-5"
        >
          <p className="text-primary text-lg">View All 329 New Listings</p>
          <h1 className="text-2xl font-bold md:text-5xl text-white">
            Latest Properties
          </h1>
        </motion.div>
        {loading ? (
          <div className="mt-20 text-white">
            <LoadingState />
          </div>
        ) : (
          <motion.div
            whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            className="my-12 items-center justify-center mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4"
          >
            {latestProperties.map((property) => (
              <div
                key={property._id}
                className="flex  group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="flex w-full flex-col">
                  <div className="p-2">
                    <Link to={`listing/${property._id}`}>
                      <img
                        src={property.imageUrls[0]}
                        className="w-full h-48 object-cover"
                        alt={property.title}
                      />
                    </Link>
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
                          <Link to={`listing/${property._id}`}>
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
            ))}
          </motion.div>
        )}
        <motion.div
          whileInView={{ y: [0, 50], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="flex my-20 mx-auto items-center justify-center"
        >
          <button
            onClick={() => navigate(`/listings`)}
            className="p-3 capitalize bg-primaryLight hover:bg-primaryDark text-white rounded-lg transition-all ease-in-out duration-500 hover:scale-105"
          >
            See all properties
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProperty;
