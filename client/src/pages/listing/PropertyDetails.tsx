const PropertyDetails = ({ listing }) => {
  return (
    <>
      <div className="space-y-5">
        <div>{listing.description}</div>
        <div className="text-lg">
          <h1 className="text-lg font-bold text-cyan-700">
            Additional Details
          </h1>
          <div className="mt-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Building Age:</p>
                <p>2 Years</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Cooling:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Gas:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Parking:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Sewer:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Heating:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Water:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Storage:</p>
                <p>Yes</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Pets:</p>
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg">
          <h1 className="text-lg font-bold text-cyan-700">Nearest Place</h1>
          <div className="mt-3">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Airport:</p>
                <p>3 KM</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Hospital:</p>
                <p>2 KM</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Beach:</p>
                <p>3 KM</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">School:</p>
                <p>4 KM</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Park:</p>
                <p>2 KM</p>
              </div>
              <div className="flex justify-evenly">
                <p className="font-semibold text-gray-800">Gas:</p>
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
