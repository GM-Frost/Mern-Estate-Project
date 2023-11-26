import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { BlogData } from "./Data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
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

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = BlogData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(BlogData.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrentPage = (id: number) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };
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
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <span>&#62;</span>
                  <li>News</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Blog</h1>
          </div>
        </div>
      </div>
      {/** ----------------- CONTACT SECTION BEGINS ------------ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="py-5 min-h-screen w-full flex"
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
          <div className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {records.map((items) => (
              <div
                key={items.id}
                className="flex  group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="flex w-full flex-col">
                  <div className="p-2">
                    <img
                      src={items.img}
                      className="w-full h-48 object-cover"
                      alt={items.title}
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-3 items-center justify-center">
                          <BsFillCalendarDateFill className="text-primary " />
                          <p className="text-baseLight"> {items.date}</p>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                          <AiOutlineUser className="text-xl text-primary" />
                          <p className="text-baseLight"> {items.postedBy}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col gap-3 py-5 border-b-2 text-center items-center justify-center">
                        <h2 className="font-bold text-xl  group-hover:text-primary transition-colors duration-300 ease-in-out">
                          <Link to={""}>{items.title}</Link>
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
          </div>
          <nav className="flex justify-center items-center">
            <ul className="flex">
              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Previous"
                onClick={prevPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowBack />
                </span>
              </li>
              {numbers.map((number, index) => (
                <li
                  key={index}
                  className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${
                    currentPage === number
                      ? "from-primary to-primaryDark shadow-primaryDark/20 text-white"
                      : "border border-blue-gray-100 bg-transparent text-blue-gray-500"
                  }  p-0 text-sm  shadow-md  transition duration-150 ease-in-out hover:bg-primaryLight hover:text-white cursor-pointer`}
                  onClick={() => changeCurrentPage(number)}
                >
                  {number}
                </li>
              ))}

              <li
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
                aria-label="Next"
                onClick={nextPage}
              >
                <span className="material-icons text-sm">
                  <IoIosArrowForward />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </motion.section>
      <Layout />
    </>
  );
};

export default Blog;
