import { Outlet } from "react-router-dom";
import Sidebar from "components/screen-components/sidebar";
import Header from "components/screen-components/header";
const Layout = () => {
  return (
    <div className="flex w-full min-h-screen overflow-x-hidden bg-grey-300">
      <Sidebar />
      <div className="flex flex-col ml-6 lg:ml-[370px] mr-[2rem] mt-[1rem] overflow-x-hidden w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
