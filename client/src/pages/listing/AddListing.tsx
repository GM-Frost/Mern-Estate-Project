import { Link } from "react-router-dom";
import { ForRent, ForSale } from "../../assets";

const AddListing = () => {
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
                  <Link to={"/"}>
                    <li>Home</li>
                  </Link>
                  <span>&#62;</span>
                  <Link to={"/profile"}>
                    <li>Profile</li>
                  </Link>
                  <span>&#62;</span>
                  <li>Listing</li>
                </ul>
              </p>
            </div>
            <h1 className="text-5xl text-white font-bold">Add Property</h1>
          </div>
        </div>
      </div>
      {/*--------------------- Dashboard Section ---------------- */}
      <div className="w-full bg-indigo-50 mx-auto flex items-center justify-center p-6">
        <div className="p-4 w-full h-auto md:h-[800px] lg:w-[80%]">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/2 space-y-4 rounded-md bg-primary/10 flex flex-col justify-center items-center">
              <div className="mt-5 relative text-center bg-primary/20 w-32 h-32 justify-center items-center rounded-full">
                <div className="flex justify-center items-center w-32 h-32 rounded-full">
                  <img
                    className="object-cover w-28 h-28 rounded-full"
                    src={ForRent}
                    alt="For Rent"
                  />
                </div>
              </div>
              <h1 className="font-bold text-xl">Add Property for Rent</h1>
              <p>Your email address will not be published.</p>
              <button className="p-5 bg-primary hover:bg-primaryDark rounded-md text-white">
                Create for Rent
              </button>
              <div></div>
            </div>
            <div className="w-full md:w-1/2 space-y-4 rounded-md bg-primary/10 flex flex-col justify-center items-center">
              <div className="mt-5 relative text-center bg-primary/20 w-32 h-32 justify-center items-center rounded-full">
                <div className="flex justify-center items-center w-32 h-32 rounded-full">
                  <img
                    className="object-cover w-28 h-28 rounded-full"
                    src={ForSale}
                    alt="For Sale"
                  />
                </div>
              </div>
              <h1 className="font-bold text-xl">Add Property for Sale</h1>
              <p>Your email address will not be published.</p>
              <Link to={"/profile/addlisting/forsale"}>
                <button className="p-5 text-dark bg-neutral hover:bg-yellow-700 rounded-md">
                  Create for Sale
                </button>
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListing;
