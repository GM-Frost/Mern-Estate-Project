const PropertyDetails = () => {
  return (
    <>
      <div className="space-y-5">
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance.
        </div>
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
