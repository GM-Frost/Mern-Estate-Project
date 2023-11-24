import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { Button } from "@material-tailwind/react";
import { MdList, MdOutlineDashboard } from "react-icons/md";

import FilterListing, { IFilterFormData } from "./SearchListing/FilterListing";
import FilteredCard from "./SearchListing/FilteredCard";
import { useEffect, useState } from "react";
import LoadingState from "../../components/Loading/LoadingState";

const AllListings: React.FC = () => {
  const [filterLayout, setFilterLayout] = useState<"grid" | "list">("grid");
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);

  const handleSubmit = (e) => {
    e.preventDefault();

    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/listings?${searchQuery}`);
    fetchListings();
  };

  const handleFilterSubmit = (formData: IFilterFormData) => {
    urlParams.set("searchTerm", formData.searchTerm);
    urlParams.set("addressCity", formData.addressCity);
    urlParams.set("propertyType", formData.buildingType);
    urlParams.set("type", formData.propertyType);
    urlParams.set("bedrooms", formData.totalBedrooms);
    urlParams.set("bathrooms", formData.totalBathrooms);
    const searchQuery = urlParams.toString();
    setFilterData(searchQuery);
    navigate(`/listings?${searchQuery}`);

    fetchListings();
  };

  const fetchListings = async () => {
    const searchtermFromUrl = urlParams.get("searchTerm");

    try {
      setLoading(true);
      let apiUrl = `/api/listing/get`;
      if (searchtermFromUrl) {
        apiUrl += `?searchTerm=${searchtermFromUrl}`;
      }

      if (filterData) {
        apiUrl += `?${filterData}`;
      }

      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setListings(data);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to fetch listings:", response.statusText);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching listings:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlSearchTerm = urlParams.get("searchTerm");
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
    fetchListings();
  }, []);

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <>
      <div
        className="relative min-h-[400px] bg-base-200 items-center text-white flex bg-cover bg-no-repeat bg-blend-overlay bg-black/60 justify-center flex-col"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/5016999/pexels-photo-5016999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        }}
      >
        <div className="text-center ">
          <div className="max-w-md flex flex-col text-center justify-center items-center">
            <div className="text-sm text-yellow-700 ">
              <p className="py-6">
                <ul className="flex justify-center items-center gap-3">
                  <Link to={"/"}>
                    <li>Home</li>
                  </Link>
                  <span>&#62;</span>
                  <li>Latest Properties</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Latest Properties</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Search Section ---------------- */}

      <div className="w-full bg-primary/5 flex-col space-y-10 bg-white-50 mx-auto flex items-center justify-center p-6">
        <div className="bg-white rounded-md shadow-md w-full lg:w-[80%]">
          <div className="flex flex-col md:flex-row space-x-5  items-center justify-between">
            <div className="p-3">
              <div>
                <div className=" p-2  bg-gray-100 rounded-lg  items-center justify-center text-center">
                  <form onSubmit={handleSubmit}>
                    <label>
                      <input
                        type="text"
                        placeholder="Search Properties..."
                        className="  bg-gray-100 w-56 placeholder:text-primary text-primary mr-2 p-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Button
                        type="submit"
                        className="inline-block font-semibold bg-primary hover:bg-primaryDark"
                      >
                        Search Now
                      </Button>
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div className=" text-baseLight p-4">
              Showing <span className="text-dark">1-2</span> of{" "}
              <span className="text-dark">17</span> results
            </div>
            <div className="hidden md:flex gap-3 items-center text-center p-4 ">
              <div
                className={`cursor-pointer rounded-md p-1 ${
                  filterLayout === "grid"
                    ? "bg-primaryLight text-white"
                    : "hover:bg-primaryLight hover:text-white"
                }`}
                onClick={() => setFilterLayout("grid")}
              >
                <MdOutlineDashboard className="text-2xl" />
              </div>
              <div
                className={`cursor-pointer rounded-md p-1 ${
                  filterLayout === "list"
                    ? "bg-primaryLight text-white"
                    : "hover:bg-primaryLight hover:text-white"
                }`}
                onClick={() => setFilterLayout("list")}
              >
                <MdList className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        {/*--------------------- Content Section ---------------- */}
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/4 space-y-10">
            <FilterListing onFormSubmit={handleFilterSubmit} />
          </div>

          <div className="w-full md:w-3/4 flex flex-col">
            {loading ? (
              <LoadingState />
            ) : (
              <FilteredCard layout={filterLayout} listings={listings} />
            )}
          </div>
        </div>
      </div>
      <Layout />
    </>
  );
};

export default AllListings;
