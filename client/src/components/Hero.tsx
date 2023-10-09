type Props = {
  heading: string;
  message: string;
};

const Hero = ({ heading, message }: Props) => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen mb-[12rem] bg-fixed bg-center bg-cover custom-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />
        <div className="p-5 text-white z-[2]  mt-[-10rem]  translate-y-3/4">
          <h2 className="text-6xl font-bold xl:w-1/2">{heading}</h2>
          <p className="py-5 text-xl">{message}</p>
          <div className="items-center flex justify-center gap-4">
            <button className="px-8 py-2 border  hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all ease-in-out duration-500">
              Book
            </button>
            <button className="px-8 py-2 border  hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all ease-in-out duration-500">
              Contact Us
            </button>
          </div>
        </div>
        <div className="absolute p-8 text-black z-[2] bottom-0 right-2/4 bg-white bg-opacity-70 hidden md:block">
          <h2 className="text-5xl font-bold capitalize">
            Luxary Apartment In the town city
          </h2>
          <p className="py-5 text-xl capitalize">
            439 Street, nicholas Dev, USA
          </p>
          <div className="items-center flex justify-center gap-4">
            <button className="px-8 py-2 border font-bold leading-5 bg-black text-white hover:bg-cyan-500 hover:text-white hover:border-cyan-500">
              $5022
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
