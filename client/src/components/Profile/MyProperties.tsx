import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyProperties = () => {
  return (
    <div className="flex flex-col flex-wrap w-full h-full space-y-3">
      <div className="flex flex-wrap font-bold justify-between items-start text-start">
        <h1>My Properties</h1>
        <Link to={"/profile/addlisting"}>
          <div className="p-3 bg-primaryLight rounded-lg text-white flex flex-wrap gap-3 hover:bg-primaryDark cursor-pointer transition-colors duration-300 ease-in-out">
            Add Listing +
          </div>
        </Link>
      </div>
      <div className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center">
        <div className="relative md:w-[25%] w-full ">
          <img
            className="rounded-md object-cover h-48 w-full"
            src="https://source.unsplash.com/random"
            alt="Listing Image"
          />
          <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
            Active
          </div>
        </div>
        <div className="md:w-[68%] w-full  flex flex-col p-2   flex-wrap">
          <h2 className="text-sm p-1 bg-neutral md:w-1/3 w-full rounded-lg text-center items-center">
            For to Sale
          </h2>
          <div className="mt-2 space-y-1">
            <h1 className="font-bold">Northwest Office Space</h1>
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            <div>(10 Ratings)</div>
          </div>
        </div>
        <div className="md:w-[5%] w-full items-center justify-evenly lg:justify-center text-center flex flex-row md:flex-col flex-wrap md:space-y-2">
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEye />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEdit />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <RiDeleteBin5Fill />
          </div>
        </div>
      </div>
      <div className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center">
        <div className="relative md:w-[25%] w-full ">
          <img
            className="rounded-md object-cover h-48 w-full"
            src="https://source.unsplash.com/random"
            alt="Listing Image"
          />
          <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
            Active
          </div>
        </div>
        <div className="md:w-[68%] w-full  flex flex-col p-2   flex-wrap">
          <h2 className="text-sm p-1 bg-neutral md:w-1/3 w-full rounded-lg text-center items-center">
            For to Sale
          </h2>
          <div className="mt-2 space-y-1">
            <h1 className="font-bold">Northwest Office Space</h1>
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            <div>(10 Ratings)</div>
          </div>
        </div>
        <div className="md:w-[5%] w-full justify-evenly flex flex-row md:flex-col flex-wrap md:space-y-2">
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEye />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEdit />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <RiDeleteBin5Fill />
          </div>
        </div>
      </div>
      <div className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center">
        <div className="relative md:w-[25%] w-full ">
          <img
            className="rounded-md object-cover h-48 w-full"
            src="https://source.unsplash.com/random"
            alt="Listing Image"
          />
          <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
            Active
          </div>
        </div>
        <div className="md:w-[68%] w-full  flex flex-col p-2   flex-wrap">
          <h2 className="text-sm p-1 bg-neutral md:w-1/3 w-full rounded-lg text-center items-center">
            For to Sale
          </h2>
          <div className="mt-2 space-y-1">
            <h1 className="font-bold">Northwest Office Space</h1>
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            <div>(10 Ratings)</div>
          </div>
        </div>
        <div className="md:w-[5%] w-full justify-evenly flex flex-row md:flex-col flex-wrap md:space-y-2">
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEye />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEdit />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <RiDeleteBin5Fill />
          </div>
        </div>
      </div>
      <div className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center">
        <div className="relative md:w-[25%] w-full ">
          <img
            className="rounded-md object-cover h-48 w-full"
            src="https://source.unsplash.com/random"
            alt="Listing Image"
          />
          <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
            Active
          </div>
        </div>
        <div className="md:w-[68%] w-full  flex flex-col p-2   flex-wrap">
          <h2 className="text-sm p-1 bg-neutral md:w-1/3 w-full rounded-lg text-center items-center">
            For to Sale
          </h2>
          <div className="mt-2 space-y-1">
            <h1 className="font-bold">Northwest Office Space</h1>
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            <div>(10 Ratings)</div>
          </div>
        </div>
        <div className="md:w-[5%] w-full justify-evenly flex flex-row md:flex-col flex-wrap md:space-y-2">
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEye />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEdit />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <RiDeleteBin5Fill />
          </div>
        </div>
      </div>
      <div className="bg-primaryLight/10 p-4 mt-10 gap-1 flex flex-wrap flex-col  md:flex-row items-center justify-center">
        <div className="relative md:w-[25%] w-full ">
          <img
            className="rounded-md object-cover h-48 w-full"
            src="https://source.unsplash.com/random"
            alt="Listing Image"
          />
          <div className="absolute -top-4 -right-4 text-white bg-green-500 p-2">
            Active
          </div>
        </div>
        <div className="md:w-[68%] w-full  flex flex-col p-2   flex-wrap">
          <h2 className="text-sm p-1 bg-neutral md:w-1/3 w-full rounded-lg text-center items-center">
            For to Sale
          </h2>
          <div className="mt-2 space-y-1">
            <h1 className="font-bold">Northwest Office Space</h1>
            <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
            <div>(10 Ratings)</div>
          </div>
        </div>
        <div className="md:w-[5%] w-full justify-evenly flex flex-row md:flex-col flex-wrap md:space-y-2">
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEye />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <FaEdit />
          </div>
          <div className="p-2 bg-primaryDark/40 rounded-md items-center justify-center text-center cursor-pointer hover:text-white transition-colors ease-in-out duration-300">
            <RiDeleteBin5Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProperties;
