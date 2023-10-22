import React, { useEffect, useState, CSSProperties } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { PropagateLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Listing = () => {
  const params = useParams();

  SwiperCore.use([Navigation]);
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
      <Layout />
      <main className="mt-24 flex flex-col items-center">
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
            <img
              className="w-full h-[550px] object-cover bg-center transition-opacity"
              src={coverImage ? coverImage : listing?.imageUrls[0]}
              alt="Property Image"
              style={{ opacity: coverImage ? 1 : 0 }}
            />
            <div className="relative flex items-center justify-center">
              <MdChevronLeft
                onClick={slideLeft}
                size={40}
                className="bg-cyan-500 text-white rounded-full hover:bg-cyan-600 cursor-pointer"
              />
              <div
                id="slider"
                className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {listing.imageUrls.map((url: string) => (
                  <img
                    key={url}
                    src={url}
                    onClick={() => changeCover(url)}
                    alt="Slider Image"
                    className={`w-[220px] inline-block p-2 cursor-pointer rounded-3xl hover:scale-105 ease-in-out duration-300 ${
                      url === coverImage ? "opacity-800" : "opacity-50"
                    }`}
                  />
                ))}
              </div>
              <MdChevronRight
                onClick={slideRight}
                size={40}
                className="bg-cyan-500 text-white rounded-full hover:bg-cyan-600 cursor-pointer"
              />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Listing;
