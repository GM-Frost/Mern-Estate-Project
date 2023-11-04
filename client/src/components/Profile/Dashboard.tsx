import { AiFillHome } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { RiHomeHeartFill, RiUserSettingsFill } from "react-icons/ri";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <AiFillHome />
          </div>
          <p>Publish Property</p>
          <span className="text-2xl font-bold">650</span>
        </div>
        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <GiExtraTime />
          </div>
          <p>Expired Property</p>
          <span className="text-2xl font-bold">45</span>
        </div>
        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <FaRegThumbsUp />
          </div>
          <p>Client Review</p>
          <span className="text-2xl font-bold">45</span>
        </div>

        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <HiClipboardDocumentList />
          </div>
          <p>My Order</p>
          <span className="text-2xl font-bold">45</span>
        </div>

        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <RiHomeHeartFill />
          </div>
          <p>Saved</p>
          <span className="text-2xl font-bold">253</span>
        </div>
        <div className="bg-primary/10 rounded-md p-4 text-center flex flex-col flex-wrap w-full justify-center items-center space-y-3 hover:bg-primaryDark hover:text-white">
          <div className="p-3 bg-white rounded-md text-primaryDark text-2xl ">
            <RiUserSettingsFill />
          </div>
          <p>Setting</p>
          <span className="text-2xl font-bold">685</span>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
