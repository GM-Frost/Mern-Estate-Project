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
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          <div className="w-1/2 items-center justify-center flex">
            <div className="p-2 relative items-center justify-center">
              <img
                src="https://source.unsplash.com/random?mansion"
                className="object-cover w-full md:w-[75%] h-full rounded-xl border-4 shadow-md border-primaryDark/50"
              />
              <div className="absolute hidden lg:block md:right-32 bottom-10  md:bottom-32">
                <img
                  src="https://source.unsplash.com/random?room"
                  alt=""
                  className="rounded-lg h-32 md:h-72 border-4 shadow-md border-white"
                />
              </div>
            </div>
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
