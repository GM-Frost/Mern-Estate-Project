import { ChangeEvent, FormEvent, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

interface ISearchCity {
  addressCity: string;
}
const initialData: ISearchCity = {
  addressCity: "",
};

const ExploreSearch: React.FC = () => {
  const [formData, setFormData] = useState<ISearchCity>(initialData);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    urlParams.set("addressCity", formData.addressCity);
    const searchQuery = urlParams.toString();
    navigate(`/listings?${searchQuery}`);
  };
  console.log(formData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
      className="py-16 bg-gray-50 overflow-x-auto min-h-screen w-full flex  items-center justify-center"
    >
      <div className="mx-auto">
        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="flex  flex-col justify-center items-center space-y-5"
        >
          <p className="text-primary text-lg">View All 329 New Listings</p>
          <h1 className="text-2xl font-bold md:text-5xl">
            Explore a Neighborhood or City
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="mt-16 flex flex-col justify-center items-center space-y-5"
        >
          <div className="mx-auto md:w-1/2 ">
            <form onSubmit={handleSubmit}>
              <div className=" p-4 flex gap-3  bg-white shadow-lg rounded-lg justify-evenly items-center">
                <div className="w-52 md:w-1/2 flex-wrap">
                  <label>
                    <select
                      id="addressCity"
                      className="p-2 w-full flex rounded-sm bg-white border border-gray-400"
                      value={formData.addressCity}
                      onChange={handleCityChange}
                      name="addressCity"
                      required
                    >
                      <option value="" disabled>
                        Select a City
                      </option>
                      <option value="Toronto">Toronto</option>
                      <option value="Vancouver">Vancouver</option>
                      <option value="Calgary">Calgary</option>
                      <option value="Montreal">Montreal</option>
                      <option value="Ottawa">Ottawa</option>
                      <option value="Winnipeg">Winnipeg</option>
                      <option value="Edmonton">Edmonton</option>
                      <option value="QuebecCity">Quebec City</option>
                      <option value="all">All</option>
                    </select>
                  </label>
                </div>
                <div className="flex md:w-1/3 items-center justify-center gap-5 p-4 bg-primary rounded-md text-white hover:bg-primaryDark transition-colors duration-500 ease-in-out cursor-pointer">
                  <BsSearch />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 2.0 }}
          className="p-5 md:p-10"
        >
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
        </motion.div>
        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="mt-5 flex items-center justify-center"
        >
          <button
            onClick={() => navigate(`/listings?addressCity=all`)}
            className="p-5 text-center rounded-md bg-primary hover:bg-primaryDark transition-all duration-500 ease-in-out hover:scale-105 text-white"
          >
            See all City
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExploreSearch;
