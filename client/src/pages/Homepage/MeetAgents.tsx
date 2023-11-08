import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Abstract10, AbstractAgentBg, AbstractLatestNews } from "../../assets";
import { Link } from "react-router-dom";

const MeetAgents = () => {
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
        <div className="flex flex-col justify-center items-center space-y-5">
          <p className="text-primary text-lg">View All 247 Agents</p>
          <h1 className="text-2xl font-bold md:text-5xl text-center">
            Meet Properties Agents
          </h1>
        </div>
        <div className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex p-3 relative group bg-white rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="w-1/2">
                <img
                  src="https://source.unsplash.com/random?person"
                  alt="Agent"
                  className="h-52 w-52 rounded-full object-cover border-2 border-primaryLight"
                />
              </div>
              <div className="w-1/2 space-y-4">
                <p className="font-semibold">
                  <Link to="#">See Properties</Link>
                </p>
                <div className="flex justify-center text-xl">
                  <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                    <FaLinkedin />
                  </div>
                  <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                    <FaTwitter />
                  </div>
                  <div className="bg-primary/30 cursor-pointer h-8 w-8 hover:bg-primaryDark hover:text-white rounded-full flex items-center justify-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 p-2 bg-gray-100 shadow-md flex flex-col transform -translate-x-1/2">
                <h1 className="text-2xl font-semibold text-baseDark">
                  Agent Name
                </h1>
                <p className="text-md text-baseLight">Agent Name</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetAgents;