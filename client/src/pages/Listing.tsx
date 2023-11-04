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
import { Abstract8 } from "../assets";

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

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

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
  return (
    <>
      <main className="mt-20 min-h-screen w-screen flex flex-col items-center">
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
                    className={`my-8 h-[100px] md:h-[130px] w-[100px] md:w-[220px] sm:w-[190px] inline-block p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300 ${
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
            <div
              className="relative bg-gray-200 w-full bg-cover bg-center inset-0 mix-blend-grayscale"
              style={{
                backgroundImage: `url(${Abstract8})`,
                backgroundBlendMode: "soft-light",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
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
                    <div className="relative w-full bg-cover bg-center p-4 rounded-lg glass bg-cyan-800">
                      <form>
                        {/* Form fields and submit button */}
                        <div className="flex flex-col flex-wrap ">
                          <h1 className="my-5 text-white font-bold text-3xl">
                            Property Agent
                          </h1>
                          <div className="flex flex-row justify-start gap-4">
                            <div className="avatar">
                              <div className="w-24 rounded-full ring ring-[#000000] ring-offset-base-100 ring-offset-2">
                                <img src={listing.agentProfile} />
                              </div>
                            </div>
                            <div className="text-white">
                              <h2 className="font-bold text-xl">Agent Name</h2>
                              <p className="font-bold text-md">
                                Real Estate Broker
                              </p>
                            </div>
                          </div>
                          <hr className="my-8   bg-neutral-100 opacity-50 dark:opacity-50" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <input
                              type="text"
                              placeholder="Full Name"
                              className="input input-bordered w-full  bg-transparent text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              placeholder="Your email"
                              className="input input-bordered w-full bg-transparent text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Your message"
                              className="textarea textarea-bordered textarea-lg w-full  bg-transparent text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div className="flex flex-wrap justify-center">
                            <Button className=" p-5 hover:bg-white hover:text-cyan-500 transition-colors duration-300 ease-in-out">
                              Send Message Now
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <Layout />
    </>
  );
};

export default Listing;
