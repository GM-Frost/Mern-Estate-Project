import { useNavigate } from "react-router-dom";
import { Background404 } from "../assets/index.js";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex  items-center justify-center "
        style={{
          backgroundImage: `url(${Background404})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="absolute bottom-6">
          <button
            onClick={() => navigate("/")}
            className="p-2 bg-red-800 w-[280px] rounded-xl hover:bg-red-900 hover:scale-110 transition-all ease-in-out duration-300 text-white text-xl font-bold"
          >
            Go Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Page404;
