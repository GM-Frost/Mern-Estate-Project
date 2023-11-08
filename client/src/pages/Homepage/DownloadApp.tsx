import { FaApple } from "react-icons/fa";
import { AbstractMobileSection } from "../../assets";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadApp = () => {
  return (
    <section
      className="py-5 min-h-[400px] w-full flex"
      style={{
        backgroundImage: `url(${AbstractMobileSection})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "#3d33ab",
      }}
    >
      <div className="mx-auto w-[90%] mt-10 flex flex-col">
        <div className="mt-16 flex lg:flex-row flex-col text-white lg:justify-evenly justify-center lg:gap-20 gap-10">
          <div className="flex flex-col space-y-8 ">
            <h1 className="font-bold text-3xl">Download Our Mobile App</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered into the find to amke it
              alteration.
            </p>
            <div className="flex gap-5">
              <div className="p-3 flex bg-black group cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500 hover:bg-white hover:shadow-lg rounded-full items-center justify-center gap-3">
                <FaApple className="text-4xl text-white group-hover:text-primary transition-colors ease-in-out duration-500" />
                <p className="flex flex-col transition-colors ease-in-out duration-500">
                  <span className="uppercase text-baseLight text-sm">
                    Download on the
                  </span>
                  <h4 className="text-semibold text-lg group-hover:text-baseDark">
                    App Store
                  </h4>
                </p>
              </div>
              <div className="p-3 flex bg-black group cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500 hover:bg-white hover:shadow-lg rounded-full items-center justify-center gap-3">
                <IoLogoGooglePlaystore className="text-4xl text-white group-hover:text-primary transition-colors ease-in-out duration-500" />
                <p className="flex flex-col transition-colors ease-in-out duration-500">
                  <span className="uppercase text-baseLight text-sm">
                    Get it on the
                  </span>
                  <h4 className="text-semibold text-lg group-hover:text-baseDark">
                    Google Play
                  </h4>
                </p>
              </div>
            </div>
          </div>
          <div className="items-center justify-center flex lg:w-1/2">
            <img src="https://homco.netlify.app/img/app-screen.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
