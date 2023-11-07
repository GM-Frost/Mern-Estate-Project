import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineBathtub, MdOutlineKingBed } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";

const LatestProperty = () => {
  return (
    <section
      className="py-16 min-h-screen w-full flex"
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/116/398/original/modern-night-city-skyline-landscape-background-vector.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="mx-auto w-[90%] mt-10">
        <div className="flex  flex-col justify-center items-center space-y-5">
          <p className="text-primary text-lg">View All 329 New Listings</p>
          <h1 className="text-2xl font-bold md:text-5xl text-white">
            Latest Properties
          </h1>
        </div>
        <div className="my-12 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
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
                      <p className="font-semibold text-primary text-xl">
                        $976 /month
                      </p>
                      <p className="p-2 bg-neutral/50 rounded-lg">Sale</p>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 py-5 border-b-2">
                      <h2 className="font-bold text-xl group-hover:text-primary transition-colors duration-300 ease-in-out">
                        <Link to={""}>Northwest Office Space</Link>
                      </h2>
                      <div className="text-baseDark flex truncate gap-1 items-center text-left">
                        <div>
                          <HiOutlineLocationMarker className="text-primary " />
                        </div>
                        <p>1901 Thornridge Cir. Shilo Shilo Shilo</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-3 py-2 justify-evenly">
                      <div>
                        <p className="flex items-center gap-1">
                          <MdOutlineKingBed className="text-xl text-primary" />3
                          Rooms
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1">
                          <MdOutlineBathtub className="text-xl text-primary" />2
                          Bathrooms
                        </p>
                      </div>
                      <div>
                        <p className="flex items-center gap-1">
                          <RxDimensions className="text-xl text-primary" />
                          425 Sq.Ft
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
        <div className="flex my-20 mx-auto items-center justify-center">
          <button className="p-3 capitalize bg-primaryLight hover:bg-primaryDark text-white rounded-lg transition-all ease-in-out duration-500 hover:scale-105">
            See all properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProperty;
