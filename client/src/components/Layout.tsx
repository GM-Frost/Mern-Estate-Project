import Footer from "../pages/Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row h-auto  mx-auto overflow-hidden">
        <Header />
        <div className="p-4">{<Outlet />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
