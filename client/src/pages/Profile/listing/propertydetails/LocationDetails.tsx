import { BiSolidMapPin } from "react-icons/bi";

const LocationDetails = ({ listing }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white group shadow-lg rounded-md w-full flex flex-col text-center justify-center p-4">
        <div className="bg-primary/20 rounded-full group-hover:bg-primaryDark group-hover:text-white transition-all duration-500 ease-in-out flex items-center justify-center h-28 w-28">
          <BiSolidMapPin className="text-7xl" />
        </div>
        <div>
          <h1 className="font-bold text-baseLight text-xl">Address</h1>
        </div>
        <div>
          <p className="text-xl">
            {listing.addressLine}, {listing.addressCity},{" "}
            {listing.addressProvince}
          </p>
        </div>
      </div>
      <div className="bg-white group shadow-lg rounded-md w-full flex flex-col text-center justify-center p-4">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden
        end to main to marked.
      </div>
    </div>
  );
};

export default LocationDetails;
