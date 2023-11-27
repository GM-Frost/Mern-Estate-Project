import { FaApple } from "react-icons/fa";
import { AbstractMobileSection, phone } from "../../assets/index.js";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

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
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
            >
              <h1 className="font-bold text-3xl">Download Our Mobile App</h1>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
            >
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered into the find to amke it
                alteration.
              </p>
            </motion.div>
            <div className="flex gap-5">
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="p-3 flex bg-black group cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500 hover:bg-white hover:shadow-lg rounded-full items-center justify-center gap-3"
              >
                <FaApple className="text-4xl text-white group-hover:text-primary transition-colors ease-in-out duration-500" />
                <p className="flex flex-col transition-colors ease-in-out duration-500">
                  <span className="uppercase text-baseLight text-sm">
                    Download on the
                  </span>
                  <h4 className="text-semibold text-lg group-hover:text-baseDark">
                    App Store
                  </h4>
                </p>
              </motion.div>
              <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="p-3 flex bg-black group cursor-pointer hover:scale-110 transition-transform ease-in-out duration-500 hover:bg-white hover:shadow-lg rounded-full items-center justify-center gap-3"
              >
                <IoLogoGooglePlaystore className="text-4xl text-white group-hover:text-primary transition-colors ease-in-out duration-500" />
                <p className="flex flex-col transition-colors ease-in-out duration-500">
                  <span className="uppercase text-baseLight text-sm">
                    Get it on the
                  </span>
                  <h4 className="text-semibold text-lg group-hover:text-baseDark">
                    Google Play
                  </h4>
                </p>
              </motion.div>
            </div>
          </div>
          <div className="items-center justify-center flex lg:w-1/2">
            <motion.img
              src={phone}
              variants={scaleVariants}
              className="animate-shake"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
