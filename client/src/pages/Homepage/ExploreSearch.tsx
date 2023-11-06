import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const ExploreSearch = (props: Props) => {
  return (
    <section className="pt-16 bg-gray-50 min-h-screen w-full flex  items-center justify-center">
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

        <div className="mt-16 mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://source.unsplash.com/random?house"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSearch;
