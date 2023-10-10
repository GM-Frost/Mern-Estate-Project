import { BiEdit } from "react-icons/bi";
import Layout from "../components/Layout";
import { BsHouseAdd } from "react-icons/bs";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <Layout />
      <div>
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl">22</p>
                  <p className="text-gray-400"> Listing</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">10</p>
                  <p className="text-gray-400">Photos</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl">89</p>
                  <p className="text-gray-400">Comments</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="space-x-4 flex justify-evenly mt-32 md:mt-0 md:justify-center">
                <button className="flex gap-2 justify-center items-center text-white py-2 px-4 uppercase rounded bg-cyan-400 hover:bg-cyan-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 md:py-3 md:px-6 md:text-lg">
                  Edit
                  <span>
                    <BiEdit className="text-lg" />
                  </span>
                </button>
                <button className="flex gap-2 justify-center items-center text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 md:py-3 md:px-6 md:text-lg">
                  Create Listing{" "}
                  <span>
                    <BsHouseAdd className="text-lg" />{" "}
                  </span>
                </button>
              </div>
            </div>
            <div className="mt-20 text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                Jessica
                <span className="font-light text-gray-500">27</span>
              </h1>
              <p className="font-light text-gray-600 mt-3">
                Bucharest, Romania
              </p>
              <p className="mt-8 text-gray-500">
                Solution Manager - Creative Tim Officer
              </p>
              <p className="mt-2 text-gray-500">
                University of Computer Science
              </p>
            </div>
            <div className="mt-12 flex flex-col justify-center">
              <p className="text-gray-600 text-center font-light lg:px-16">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
