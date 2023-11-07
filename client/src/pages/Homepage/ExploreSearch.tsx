import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const ExploreSearch = (props: Props) => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen w-full flex  items-center justify-center">
      <div className="mx-auto">
        <div className="flex  flex-col justify-center items-center space-y-5">
          <p className="text-primary text-lg">View All 329 New Listings</p>
          <h1 className="text-2xl font-bold md:text-5xl">
            Explore a Neighborhood or City
          </h1>
        </div>
        <div className="mt-16 flex flex-col justify-center items-center space-y-5">
          <div className="mx-auto md:w-1/2 ">
            <div className=" p-4 flex gap-3  bg-white shadow-lg rounded-lg justify-evenly items-center">
              <div className="w-52 md:w-1/2 flex-wrap">
                <label>
                  <Select
                    variant="static"
                    color="indigo"
                    label="Select Location"
                    className="text-center items-center justify-center"
                  >
                    <Option>Toronto</Option>
                    <Option>Montreal</Option>
                    <Option>Ottawa</Option>
                    <Option>Vancouver</Option>
                    <Option>Calgary</Option>
                    <Option>Edmonton</Option>
                  </Select>
                </label>
              </div>
              <div className="flex md:w-1/3 items-center justify-center gap-5 p-4 bg-primary rounded-md text-white hover:bg-primaryDark transition-colors duration-500 ease-in-out cursor-pointer">
                <BsSearch />
                <button className="flex w-full items-center justify-center">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-10">
          <div className="columns-2 md:columns-3 lg:columns-4">
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?toronto"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Toronto
                </h1>
                <p className=" font-sm font-semibold">8+ Listings</p>
              </div>
            </div>

            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?ottawa"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Ottawa
                </h1>
                <p className=" font-sm font-semibold">5+ Listings</p>
              </div>
            </div>

            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?vancouver"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Vancouver
                </h1>
                <p className=" font-sm font-semibold">7+ Listings</p>
              </div>
            </div>

            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?montreal"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Motreal
                </h1>
                <p className=" font-sm font-semibold">9+ Listings</p>
              </div>
            </div>

            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?calgary"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Calgary
                </h1>
                <p className=" font-sm font-semibold">11+ Listings</p>
              </div>
            </div>

            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?edmonton"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Edmonton
                </h1>
                <p className="font-sm font-semibold">4+ Listings</p>
              </div>
            </div>
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?winnipeg"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Winnipeg
                </h1>
                <p className="font-sm font-semibold">6+ Listings</p>
              </div>
            </div>
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-50">
              <img
                className="w-full rounded-md"
                src="https://source.unsplash.com/random/canada?quebec"
              />
              <div className="flex flex-col space-y-5 text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 mx-auto">
                <h1 className="text-xl md:text-3xl font-bold mx-auto md:mb-3 justify-center items-center">
                  Quebec
                </h1>
                <p className=" font-sm font-semibold">5+ Listings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <button className="p-5 text-center rounded-md bg-primary hover:bg-primaryDark transition-all duration-500 ease-in-out hover:scale-105 text-white">
            See all City
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSearch;
