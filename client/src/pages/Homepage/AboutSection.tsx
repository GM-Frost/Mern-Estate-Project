import { FaUsers } from "react-icons/fa";
import { Abstract10 } from "../../assets";
import { BsBuildingsFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <section
      className="py-16 min-h-screen w-full flex  items-center justify-center"
      style={{
        backgroundImage: `url(${Abstract10})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div className="w-full md:w-[90%] ">
        <div className="flex flex-col   md:flex-row justify-center items-center md:space-x-10">
          <div className="md:w-1/2  mx-auto w-[90%] relative md:p-8 rounded-md md:overflow-hidden md:mb-0 mb-4">
            {/* Image */}
            <img
              src="https://source.unsplash.com/random?house"
              alt="Main Image"
              className="w-full h-auto lg:h-full lg:w-full object-cover rounded-lg border-2 border-primaryLight"
            />
            {/* Absolute Div */}
            <div className="absolute  top-5 left-10 lg:top-16  lg:left-12 md:p-5 lg:text-3xl rounded-lg bg-black text-white p-2 rounded-tl-md">
              Since 5 years
            </div>
            {/* Overlap Image */}
            <img
              src="https://source.unsplash.com/random?city"
              alt="Overlap Image"
              className="absolute bottom-5 lg:bottom-32 right-2 border-2 border-white  w-48 h-48 lg:w-56 lg:h-56 rounded-lg"
            />
          </div>

          <div className="w-1/2 flex flex-col space-y-5">
            <h3 className="text-2xl font-semibold my-10">About Nova</h3>
            <h1 className="text-3xl font-bold">
              Have done some Cool Stuff with common users
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              Over 20 years experience providing top quality house Booking in to
              the rant and sell for your Amazing Dream & Make you Happy
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full flex flex-col ">
                <div className="relative bg-primary text-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                  <FaUsers className="text-4xl" />
                </div>
                <h2 className="font-semibold my-4">4k+ Renters</h2>
                <p>believe in our service & Care</p>
              </div>
              <div className="w-full flex flex-col ">
                <div className="relative bg-primary text-gray-300 w-14 h-14 rounded-full flex items-center justify-center">
                  <BsBuildingsFill className="text-4xl" />
                </div>
                <h2 className="font-semibold my-4">10k+ Sellers</h2>
                <p>list house ready for cccupancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
