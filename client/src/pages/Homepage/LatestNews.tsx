import { Link } from "react-router-dom";
import { AbstractLatestNews } from "../../assets";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
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

const LatestNews = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      exit={{ opacity: 0 }}
      className="py-16 min-h-screen w-full flex"
      style={{
        backgroundImage: `url(${AbstractLatestNews})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(162, 155, 242, 0.7)",
      }}
    >
      <div className="mx-auto w-[90%] mt-10">
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="flex flex-col justify-center items-center space-y-5"
        >
          <p className="text-primary text-lg">Get our Information</p>
          <h1 className="text-2xl font-bold md:text-5xl text-center">
            Our Latest News
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, 50], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.0 }}
          className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex  group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="flex w-full flex-col">
                <div className="p-2">
                  <img
                    src="https://source.unsplash.com/random"
                    className="w-full h-48 object-cover"
                    alt="Property Image"
                  />
                  <div className="p-3">
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex gap-3 items-center justify-center">
                        <BsFillCalendarDateFill className="text-primary " />
                        <p className="text-baseLight"> July 23,2023</p>
                      </div>
                      <div className="flex gap-3 items-center justify-center">
                        <AiOutlineUser className="text-xl text-primary" />
                        <p className="text-baseLight"> Abdullah Mamun</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 py-5 border-b-2 text-center items-center justify-center">
                      <h2 className="font-bold text-xl  group-hover:text-primary transition-colors duration-300 ease-in-out">
                        <Link to={""}>
                          Search For House Rent in a Property For Rent end.
                        </Link>
                      </h2>
                    </div>
                    <div className="mt-3 flex gap-3 py-2 justify-start font-semibold text-lg">
                      <div className="flex gap-3 items-center justify-center hover:text-primary cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                        <p className="flex items-center gap-1">Read More</p>
                        <IoArrowRedoCircleOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LatestNews;
