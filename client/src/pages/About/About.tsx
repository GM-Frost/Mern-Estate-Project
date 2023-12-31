import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

import AboutSection from "../Homepage/AboutSection";
import { AiFillCheckCircle } from "react-icons/ai";
import { TbStars } from "react-icons/tb";
import { AbstractContactus } from "../../assets/index.js";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQSection from "../Homepage/FAQSection";
import DownloadApp from "../Homepage/DownloadApp";
import { useEffect, useState } from "react";
import { IAgent, agentinitialValue } from "../types/Agents.types";
import { motion } from "framer-motion";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [agentList, setAgentList] = useState<IAgent[]>([agentinitialValue]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch(
          `https://nova-estate-server.onrender.com/api/agent/getAgents`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch agents");
        }
        const data = await response.json();
        const shuffledAgents = shuffleArray(data);
        setAgentList(shuffledAgents);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  // Function to shuffle the array randomly (Fisher-Yates algorithm)
  const shuffleArray = (array: IAgent[]): IAgent[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
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
                  <li>About Us</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">About Us</h1>
          </div>
        </div>
      </div>

      {/** -------------- ABOUT SECTION BEGINS ---------------- */}
      <AboutSection />

      <section className="relative py-20 h-auto">
        <div
          className="absolute -top-20 h-[300px] w-full flex"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
          className="relative flex lg:flex-row flex-col mt-20 bg-white w-[90%] mx-auto p-10 shadow-lg rounded-md"
        >
          <div className="w-full lg:w-1/3 flex flex-col space-y-5">
            <motion.div>
              <h1 className="text-3xl font-bold"> Fun Facts</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                majority have suffered.
              </p>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <AiFillCheckCircle className="text-primary text-3xl" />
              <p>Suspe ndisse suscipit sagittis leo.</p>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <AiFillCheckCircle className="text-primary text-3xl" />
              <p>Suspe ndisse suscipit sagittis leo.</p>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <AiFillCheckCircle className="text-primary text-3xl" />
              <p>Suspe ndisse suscipit sagittis leo.</p>
            </motion.div>

            <div className="flex justify-center items-center">
              <motion.button className="p-3 text-white bg-primary hover:bg-primaryDark rounded-lg hover:scale-105 transition-all ease-in-out duration-300 shadow-md cursor-pointer">
                Need a Home
              </motion.button>
            </div>
          </div>
          <div className="mt-10 w-full mx-auto lg:w-2/3 p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={index}
                  whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
                  transition={{ duration: 1.0 }}
                  className="relative group hover:bg-primaryDark hover:text-white bg-primary/10 rounded-md px-3 py-10 justify-center items-center"
                >
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">435k</h1>
                    <p className="text-baseLight group-hover:text-white">
                      Happy Customer
                    </p>
                  </div>
                  <div className="absolute group-hover:border-2 group-hover:border-neutral text-white -top-12 right-1/2 transform translate-x-1/2 bg-primaryDark w-20 h-20 rounded-full flex justify-center items-center">
                    <TbStars className="text-3xl text-center" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="py-16 min-h-screen w-full flex   justify-center"
        style={{
          backgroundImage: `url(${AbstractContactus})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="w-full md:w-[80%] ">
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <motion.div
              whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 1.0 }}
              className="space-y-4 items-center"
            >
              <p className="text-primary text-lg">
                View all {agentList.length} Agent
              </p>
              <h1 className="text-2xl font-bold md:text-5xl">
                Meet Properties Agents
              </h1>
            </motion.div>
            <div>
              <button className="mt-10 capitalized p-4 bg-primary hover:bg-primaryDark text-white hover:scale-105 transition-all duration-300 ease-in-out rounded-md shadow-md">
                See All Agents
              </button>
            </div>
          </div>

          <div className="m-auto">
            <div className="mt-20">
              <Slider {...settings}>
                {agentList.map((agent) => (
                  <div
                    key={agent._id}
                    className="flex  group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                    <div className="flex w-full flex-col">
                      <img
                        src={agent.avatar}
                        className="w-full h-48 object-cover rounded-t-md"
                        alt={agent.firstname}
                      />
                      <div className="p-3">
                        <div className="mt-5 flex flex-col gap-3">
                          <h2 className="font-semibold text-2xl group-hover:text-primaryDark transition-colors duration-300 ease-in-out">
                            <Link to={""}>
                              {agent.firstname + " " + agent.lastname}
                            </Link>
                          </h2>
                          <div className="text-baseLight items-center text-left">
                            <p>Real Estate Agent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <DownloadApp />
      <Layout />
    </>
  );
};

export default About;
