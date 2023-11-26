import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AbstractLatestNews } from "../../assets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IAgent, agentinitialValue } from "../types/Agents.types";
import { motion } from "framer-motion";

const MeetAgents = () => {
  const [agentList, setAgentList] = useState<IAgent[]>([agentinitialValue]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/api/agent/getAgents?limit=6");
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
    <section
      className="py-16 min-h-screen w-full flex"
      style={{
        backgroundImage: `url(${AbstractLatestNews})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(222, 221, 240, 0.1)",
      }}
    >
      <div className="mx-auto w-[90%] mt-10">
        <motion.div
          whileInView={{ y: [50, 0], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="flex flex-col justify-center items-center space-y-5"
        >
          <p className="text-primary text-lg">
            View All {agentList.length} Agents
          </p>
          <h1 className="text-2xl font-bold md:text-5xl text-center">
            Meet Properties Agents
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [0, 50], x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {agentList.map((agent) => (
            <div
              key={agent._id}
              className="flex p-3 relative group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="w-1/2">
                <img
                  src={agent.avatar}
                  alt={agent.firstname}
                  className="h-52 w-52 rounded-full object-cover border-2 border-primaryLight"
                />
              </div>
              <div className="w-1/2 space-y-4">
                <p className="font-semibold">
                  <Link to="#">See Properties</Link>
                </p>
                <div className="flex justify-center text-xl gap-3">
                  <Link to={agent.socialLinks.linkedin}>
                    <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link to={agent.socialLinks.facebook}>
                    <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                      <FaFacebook />
                    </div>
                  </Link>
                  <Link to={agent.socialLinks.twitter}>
                    <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                      <FaTwitter />
                    </div>
                  </Link>
                  <Link to={agent.socialLinks.instagram}>
                    <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                      <FaInstagram />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 p-2 bg-gray-100 shadow-md flex flex-col transform -translate-x-1/2">
                <h1 className="text-2xl font-semibold text-baseDark">
                  {agent.firstname + " " + agent.lastname}
                </h1>
                <p className="text-md text-baseLight">Real Estate Agent</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetAgents;
