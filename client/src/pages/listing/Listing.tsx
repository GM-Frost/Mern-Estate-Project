import React, { useEffect, useState, CSSProperties } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import PropertyDetails from "./propertydetails/PropertyDetails";
import { Abstract8 } from "../../assets";
import Loading from "../../components/Loading";
import { IListingFormData } from "../types/CreateListing.types";
import {
  BsEnvelope,
  BsFacebook,
  BsGlobe2,
  BsInstagram,
  BsLinkedin,
  BsPhoneFlip,
  BsTwitter,
} from "react-icons/bs";
import Page404 from "../../components/Page404";
import {
  IAgentDetails,
  InitialAgentDetails,
} from "../types/AgentDetails.types";
import LocationDetails from "./propertydetails/LocationDetails";
import FloorPlans from "./propertydetails/FloorPlans";

const Listing = () => {
  const params = useParams();

  const [activeTab, setActiveTab] = React.useState("propertyDetails");

  const [listing, setListing] = useState<IListingFormData>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coverImage, setCoverImage] = useState<string>("");

  //AGENT USESTATE
  const [agent, setAgent] = useState<IAgentDetails>(InitialAgentDetails);
  const [loadingAgent, setLoadingAgent] = useState(true);
  const [errorAgent, setErrorAgent] = useState(false);

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
      desc: <PropertyDetails listing={listing} />,
    },
    {
      label: "Locations",
      value: "location",
      desc: <LocationDetails listing={listing} />,
    },
    {
      label: "Floor Plans",
      value: "floorplans",
      desc: <FloorPlans listing={listing} />,
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

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const res = await fetch(`/api/agent/listings/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setAgent(data);
        setLoadingAgent(false);
        setErrorAgent(false);
      } catch (error) {
        setErrorAgent(true);
        setLoadingAgent(false);
      }
    };
    fetchAgentDetails();
  }, []);

  return (
    <>
      <main className="mt-20 min-h-screen w-screen flex flex-col items-center">
        {loading && <Loading loadingactive />}
        {error && <Page404 />}
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
                <h1 className="font-semibold text-5xl">{listing.title}</h1>
                <p className="flex gap-2 text-xl text-white">
                  <IoLocationOutline className="text-white" />
                  {listing.addressLine}, {listing.addressCity},{" "}
                  {listing.addressProvince}
                </p>
              </div>
              <div
                className={`absolute right-4 -bottom-8 hidden md:block  md:px-8 md:py-12 ml-auto ${
                  listing.type === "Sale"
                    ? "bg-neutral text-black"
                    : "bg-blue-600 text-white"
                } rounded-2xl`}
              >
                <div className={`flex flex-col`}>
                  <h1 className="font-bold uppercase text-4xl my-4">
                    $ {listing.regularPrice}
                  </h1>
                  <p className="text-center">{listing.type}</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <MdChevronLeft
                onClick={slideLeft}
                size={40}
                className="absolute -left-2 md:-left-2 sm:left-1 z-10 bg-primary text-white rounded-full hover:bg-primaryDark cursor-pointer"
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
                className="absolute -right-2 md:-right-2 sm:right-1 z-10 bg-primary text-white rounded-full hover:bg-primaryDark cursor-pointer "
              />
            </div>
            <div className="relative md:hidden bg-gray-200 w-full py-7">
              <div className="absolute flex w-full text-center md:hidden justify-center -top-8  ml-auto bg-neutral">
                <div className="flex flex-col">
                  <h1 className="font-bold uppercase text-4xl ">
                    $ {listing.regularPrice}
                  </h1>
                  <p className="text-gray-800">{listing.type}</p>
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
                            "bg-transparent border-b-2 border-primary shadow-none rounded-none",
                        }}
                      >
                        {data.map(({ label, value }) => (
                          <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={
                              activeTab === value ? "text-primary" : ""
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
                    <div className="relative w-full bg-cover bg-center p-4 rounded-lg glass bg-primaryDark/80">
                      <form>
                        {/* Form fields and submit button */}
                        <div className="flex flex-col flex-wrap ">
                          <h1 className="my-5 text-start text-white font-bold text-3xl">
                            Property Agent
                          </h1>
                          {loadingAgent ? (
                            "Loading..."
                          ) : (
                            <div className="flex flex-row justify-start gap-4 ">
                              <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primaryDark ring-offset-base-100 ring-offset-2">
                                  <img
                                    src={agent?.avatar}
                                    className="rounded-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="space-y-5">
                                <div className="text-white">
                                  <h2 className="font-bold text-xl">
                                    {agent?.firstname} {agent?.lastname}
                                  </h2>
                                  <p className="font-bold text-sm">
                                    {agent?.title}
                                  </p>
                                </div>
                                <div className="text-white">
                                  <p className="flex gap-2">
                                    <BsEnvelope className="text-xl" />
                                    {agent?.email}
                                  </p>
                                  <p className="flex gap-2">
                                    <BsPhoneFlip className="text-xl" />
                                    {agent?.phone}
                                  </p>
                                </div>
                                <div className="text-white flex gap-4">
                                  <a href={agent?.socialLinks.linkedin}>
                                    <BsLinkedin className="text-xl hover:text-neutral cursor-pointer" />
                                  </a>
                                  <a href={agent?.socialLinks.facebook}>
                                    <BsFacebook className="text-xl hover:text-neutral cursor-pointer" />
                                  </a>
                                  <a href={agent?.socialLinks.instagram}>
                                    <BsInstagram className="text-xl hover:text-neutral cursor-pointer" />
                                  </a>
                                  <a href={agent?.socialLinks.twitter}>
                                    <BsTwitter className="text-xl hover:text-neutral cursor-pointer" />
                                  </a>
                                  <a href={agent?.socialLinks.portfolio}>
                                    <BsGlobe2 className="text-xl hover:text-neutral cursor-pointer" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                          {errorAgent ?? "Error: Agent not found"}
                          <hr className="my-8   bg-neutral-100 opacity-50 dark:opacity-50" />
                        </div>

                        <div className="space-y-3">
                          <div>
                            <input
                              type="text"
                              placeholder="Full Name"
                              className="input input-bordered w-full border border-1 rounded-md p-2 border-baseLight focus:border-neutral bg-transparent text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              placeholder="Your email"
                              className="input input-bordered w-full bg-transparent border border-1 border-baseLight focus:border-neutral rounded-md p-2  text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div>
                            <textarea
                              placeholder="Your message"
                              className="textarea textarea-bordered textarea-lg w-full  bg-transparent border border-1 border-baseLight focus:border-neutral rounded-md p-2  text-white placeholder:text-gray-300"
                            />
                          </div>
                          <div className="flex flex-wrap justify-center">
                            <Button className=" p-5 hover:bg-white hover:text-primary transition-colors duration-300 ease-in-out">
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
