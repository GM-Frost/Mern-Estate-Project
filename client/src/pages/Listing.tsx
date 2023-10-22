import React, { useEffect, useState, CSSProperties } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
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
      <main className="mt-24">
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
            <Swiper navigation>
              {listing?.imageUrls.map((url: string) => (
                <SwiperSlide key={url}>
                  <div
                    className="h-[550px]"
                    style={{
                      background: `url(${url}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </main>
    </>
  );
};

export default Listing;
