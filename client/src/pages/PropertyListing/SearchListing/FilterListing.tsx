import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import PriceRange from "../PriceRange";
import SquareFeet from "../SquareFeet";
import { Abstract11 } from "../../../assets";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  adaptiveHeight: true,
};

export interface IFilterFormData {
  searchTerm: string;
  addressCity: string;
  buildingType: string;
  propertyType: string;
  totalBedrooms: string;
  totalBathrooms: string;
  minPrice: string | number;
  maxPrice: string | number;
  minArea: string | number;
  maxArea: string | number;
}

const initialFormData: IFilterFormData = {
  searchTerm: "",
  addressCity: "all",
  buildingType: "all",
  propertyType: "all",
  totalBedrooms: "all",
  totalBathrooms: "all",
  minPrice: "all",
  maxPrice: "all",
  minArea: "all",
  maxArea: "all",
};

interface FilterListingProps {
  onFormSubmit: (formData: IFilterFormData) => void;
}

const FilterListing: React.FC<FilterListingProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<IFilterFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        value === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  const handlePriceChange = (newPriceRange: [number, number]) => {
    const [minPrice, maxPrice] = newPriceRange;
    setFormData({
      ...formData,
      minPrice,
      maxPrice,
    });
  };
  const handleAreaChange = (newAreaRange: [number, number]) => {
    const [minArea, maxArea] = newAreaRange;
    setFormData({
      ...formData,
      minArea,
      maxArea,
    });
  };

  const bedroomOptions = ["1", "2", "3", "4+"];
  const bathroomOptions = ["1", "2", "3+"];
  const propertyType = ["Sale", "Rent"];

  return (
    <>
      <div className="flex-1">
        <div className="w-full flex bg-white rounded-md shadow-md items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-[80%] px-2 py-8 flex flex-col space-y-5"
          >
            <label htmlFor="Location" className="space-y-4">
              <span className="font-semibold">City</span>
              <select
                id="addressCity"
                className="p-2 w-full flex rounded-sm bg-white border border-gray-400"
                value={formData.addressCity}
                onChange={handleChange}
                name="addressCity"
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
            <label htmlFor="buildingType" className="space-y-4">
              <span className="font-semibold">Building Type</span>
              <select
                id="buildingType"
                className="p-2 w-full flex rounded-sm bg-white border border-gray-400"
                value={formData.buildingType}
                onChange={handleChange}
                name="buildingType"
              >
                <option value="" disabled>
                  Select Building Type
                </option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
                <option value="all">All</option>
              </select>
            </label>
            <label htmlFor="propertyType" className="space-y-4">
              <span className="font-semibold">Property Type</span>
              <div className="grid grid-cols-2  items-center  gap-4">
                {propertyType.map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`propertyType${index + 1}`}
                    className="cursor-pointer relative flex gap-3"
                  >
                    <input
                      type="checkbox"
                      id={`propertyType${index + 1}`}
                      className="appearance-none h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      value={option}
                      onChange={handleChange}
                      name="propertyType"
                      checked={formData.propertyType === option}
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`check-propertyType${
                        index + 1
                      } h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition`}
                    />
                    For {option}
                  </label>
                ))}
              </div>
            </label>
            <label htmlFor="TotalBedrooms" className="space-y-4">
              <span className="font-semibold">Total Bedrooms</span>
              <div className="grid grid-cols-2  items-center  gap-4">
                {bedroomOptions.map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`bedroom${index + 1}`}
                    className="cursor-pointer relative flex gap-3"
                  >
                    <input
                      type="checkbox"
                      id={`bedroom${index + 1}`}
                      className="appearance-none h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      value={option}
                      onChange={handleChange}
                      name="totalBedrooms"
                      checked={formData.totalBedrooms === option}
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`check-bedroom${
                        index + 1
                      } h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition`}
                    />
                    {option} Room
                  </label>
                ))}
              </div>
            </label>
            <label htmlFor="bathroom" className="space-y-4">
              <span className="font-semibold">Total Bathrooms</span>
              <div className="grid grid-cols-1 lg:grid-cols-2  items-center  gap-4">
                {bathroomOptions.map((option, index) => (
                  <label
                    key={index}
                    htmlFor={`bathroom${index + 1}`}
                    className="cursor-pointer relative flex gap-3"
                  >
                    <input
                      type="checkbox"
                      id={`bathroom${index + 1}`}
                      className="appearance-none  h-5 w-5 border-2 rounded-md border-primaryLight bg-primary/20"
                      value={option}
                      onChange={handleChange}
                      name="totalBathrooms"
                      checked={formData.totalBathrooms === option}
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`check-bathroom${
                        index + 1
                      } h-5 w-5 text-primaryDark absolute text-opacity-0 left-0 top-0 transition`}
                    />
                    {option} bath
                  </label>
                ))}
              </div>
            </label>
            <label htmlFor="PriceRange" className="space-y-4">
              <span className="font-semibold">Price Range</span>
              <PriceRange onPriceChange={handlePriceChange} />
            </label>
            <label htmlFor="SquareFeetRange" className="space-y-4">
              <span className="font-semibold">Square Feet</span>
              <SquareFeet onAreaChange={handleAreaChange} />
            </label>
            <div className="flex justify-center items-center">
              <Button
                type="submit"
                className="inline-block  font-semibold bg-primary hover:bg-primaryDark"
              >
                Filter
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-initial">
        <div className="w-full flex items-center justify-center">
          <section
            className="w-full rounded-md px-2 py-8 flex flex-col "
            style={{
              backgroundImage: `url(${Abstract11})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(113,102,240, 1)",
            }}
          >
            <h1 className=" text-white font-bold px-5 ">Our Broker List</h1>
            <div className="m-auto w-[80%] py-10">
              <Slider {...settings}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex w-full flex-col">
                      <img
                        src="https://source.unsplash.com/random"
                        className="w-full h-48 object-cover rounded-t-md"
                        alt="Property Image"
                      />
                      <div className="p-3">
                        <div className="mt-5 flex flex-col gap-3">
                          <h2 className="font-semibold text-2xl group-hover:text-primaryDark transition-colors duration-300 ease-in-out">
                            <Link to={""}>Ester Holland</Link>
                          </h2>
                          <div className="text-baseLight items-center text-left">
                            <p>Real Estate Agent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FilterListing;
