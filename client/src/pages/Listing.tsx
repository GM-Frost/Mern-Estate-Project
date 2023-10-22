import React, { useEffect, useState, CSSProperties } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { PropagateLoader } from "react-spinners";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import PropertyDetails from "./listing/PropertyDetails";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Listing = () => {
  const params = useParams();

  const [activeTab, setActiveTab] = React.useState("propertyDetails");

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coverImage, setCoverImage] = useState<string>("");
  const slideLeft = () => {
    const slider: HTMLElement | null = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider: HTMLElement | null = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const changeCover = (url: string) => {
    setCoverImage(url);
  };
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setCoverImage(data.imageUrls[0]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, []);

  const data = [
    {
      label: "Property Details",
      value: "propertyDetails",
      desc: <PropertyDetails />,
    },
    {
      label: "Locations",
      value: "location",
      desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden end to main to marked.`,
    },

    {
      label: "Reviews",
      value: "reviews",
      desc: `“There are many variations of passages of Lorem Ipsum available, in majority have into the find end to suffered.”`,
    },
  ];

  return (
    <>
      <Layout />
      <main className="mt-20 flex flex-col items-center">
        {loading && (
          <p className="text-center my-7 text-2xl">
            Please Wait.
            <PropagateLoader
              color={"#36a6b9"}
              loading={loading}
              cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </p>
        )}
        {error && (
          <p className="text-center my-7 text-2xl">Something went wrong!</p>
        )}
        {listing && !loading && !error && (
          <>
            <div className="relative w-full">
              <img
                className="w-full h-[550px] object-cover bg-center transition-opacity"
                src={coverImage}
                alt="Property Image"
                style={{ opacity: coverImage ? 1 : 0 }}
              />
              <div className="absolute bottom-10 left-0 p-4 space-y-5 text-white bg-black bg-opacity-50">
                <h1 className="font-semibold text-5xl">{listing.name}</h1>
                <p className="flex gap-2 text-xl text-white">
                  <IoLocationOutline className="text-white" />
                  {listing.address}
                </p>
              </div>
              <div className="absolute right-4 -bottom-8 hidden md:block  md:px-8 md:py-12 ml-auto bg-[#f2c94c] rounded-2xl">
                <div className="flex flex-col text-black">
                  <h1 className="font-bold uppercase text-4xl my-4">$ 3000</h1>
                  <p className="text-gray-800">Per Month</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <MdChevronLeft
                onClick={slideLeft}
                size={40}
                className="absolute -left-2 md:-left-2 sm:left-1 z-10 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 cursor-pointer"
              />
              <div
                id="slider"
                className="relative w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {listing.imageUrls.map((url: string) => (
                  <img
                    key={url}
                    src={url}
                    onClick={() => changeCover(url)}
                    alt="Slider Image"
                    className={`my-8 w-[220px] md:w-[220px] sm:w-[190px] inline-block p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300 ${
                      url === coverImage ? "opacity-800" : "opacity-50"
                    }
                   
                    `}
                  />
                ))}
              </div>
              <MdChevronRight
                onClick={slideRight}
                size={40}
                className="absolute -right-2 md:-right-2 sm:right-1 z-10 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 cursor-pointer "
              />
            </div>
            <div className="relative md:hidden bg-gray-200 w-full py-7">
              <div className="absolute flex w-full text-center md:hidden justify-center -top-8  ml-auto bg-[#f2c94c]">
                <div className="flex flex-col text-black">
                  <h1 className="font-bold uppercase text-4xl ">$ 3000</h1>
                  <p className="text-gray-800">Per Month</p>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-200 w-full">
              <div className="md:container mx-auto p-4">
                <div className="flex flex-col md:flex-row">
                  {/* Left side */}
                  <div className="w-full p-4">
                    <Tabs value={activeTab}>
                      <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                          className:
                            "bg-transparent border-b-2 border-cyan-600 shadow-none rounded-none",
                        }}
                      >
                        {data.map(({ label, value }) => (
                          <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={
                              activeTab === value ? "text-cyan-600" : ""
                            }
                          >
                            {label}
                          </Tab>
                        ))}
                      </TabsHeader>
                      <TabsBody
                        animate={{
                          initial: { y: 250 },
                          mount: { y: 0 },
                          unmount: { y: 250 },
                        }}
                      >
                        {data.map(({ value, desc }) => (
                          <TabPanel key={value} value={value}>
                            {desc}
                          </TabPanel>
                        ))}
                      </TabsBody>
                    </Tabs>
                  </div>
                  {/* Right side (Form) */}
                  <div className="w-full md:w-2/3 p-4">
                    <div className="relative bg-cyan-800 rounded-lg p-4 glass ">
                      <form>
                        {/* Form fields and submit button */}
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 "
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                          />
                        </div>

                        <Button>Button</Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Listing;
