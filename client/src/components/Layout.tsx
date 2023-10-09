import Header from "./Header";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <div>{<Outlet />}</div>
    </>
  );
};

export default Layout;
