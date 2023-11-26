import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {
  heading: string;
  message: string;
};

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

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="relative flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />
      <div className="p-5 text-white z-[2]  mt-[-30rem] text-center  translate-y-3/4">
        <motion.div
          whileInView={{ y: [-80, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="flex items-center justify-center text-center flex-col flex-wrap"
        >
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold xl:w-1/2">
            {heading}
          </h2>
          <p className="py-5 text-xl  text-center ">{message}</p>
        </motion.div>
        <div className="items-center flex justify-center gap-4">
          <motion.button
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="px-8 py-2 border  hover:bg-primary hover:text-white hover:border-primaryDark transition-all ease-in-out duration-500"
          >
            Book
          </motion.button>
          <motion.button
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="px-8 py-2 border  hover:bg-primary hover:text-white hover:border-primaryDark transition-all ease-in-out duration-500"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      <motion.div
        whileInView={{ y: [0, 0], x: [-800, 0], opacity: [0, 1] }}
        transition={{ duration: 1.0 }}
        className="absolute p-8 text-black z-[2]  bottom-0 left-2/4 bg-white bg-opacity-70 hidden md:block"
      >
        <h2 className="text-5xl font-bold capitalize">
          Luxary Apartment In the town city
        </h2>
        <p className="py-5 text-xl capitalize">439 Street, Calgary, Canada</p>
        <div className="items-center flex justify-center gap-4">
          <Link to="/listings">
            <button className="px-8 py-2 border font-bold leading-5 bg-black text-white hover:bg-primary hover:text-white hover:border-primary">
              $5022
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
