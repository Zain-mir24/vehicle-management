/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "Store/store";
import { useDispatch } from "react-redux";
import { ToogleSidebar } from "Store/Slices/SidebarSlice";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const SidebarOpen = useSelector(
    (state: RootState) => state.sidebar.SidebarOpen
  );
  const dispatch = useDispatch();
  const [menulist, setmenulist] = useState([
    {
      name: "Dasboard",
      link: "/dashboard",
      active: location.pathname === "/dashboard",
    },
    {
      name: "Categories",
      link: "/categories",
      active: location.pathname === "/categories",
    },
    {
      name: "Cars",
      link: "/cars",
      active: location.pathname === "/cars",
    },
  ]);
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/signin";
  };
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth, "window.innerWidth");
      if (window.innerWidth > 1024) {
        dispatch(ToogleSidebar(true));
      } else {
        dispatch(ToogleSidebar(false));
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setmenulist([
      {
        name: "Dasboard",
        link: "/dashboard",
        active: location.pathname === "/dashboard",
      },
      {
        name: "Categories",
        link: "/categories",
        active: location.pathname === "/categories",
      },
      {
        name: "Cars",
        link: "/cars",
        active: location.pathname === "/cars",
      },
    ]);
  }, [location.pathname]);
  return (
    <div
      className={`w-[320px] z-50 h-[97vh] bg-secondary-green flex flex-col  rounded-3xl m-4 fixed transition-all ${
        SidebarOpen ? "ml-[16px]" : "ml-[-350px]"
      }`}
    >
      <div className="relative flex justify-start gap-2 mt-6">
        <p className="text-[28px] w-full text-[white] font-bold text-center">
          Vehecrita
        </p>
        {window.innerWidth <= 1024 && (
          <span
            onClick={() => {
              dispatch(ToogleSidebar(false));
            }}
            className="absolute text-[18px] cursor-pointer text-[white] font-poppins right-5"
          >
            X
          </span>
        )}
      </div>
      <div className="relative flex flex-col h-full gap-4 px-4 mt-10">
        {menulist.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                item.active && "bg-white !text-secondary-medium-green"
              } py-2 rounded-lg px-4`}
            >
              <Link to={item?.link}>
                <h3
                  className={`${
                    item.active ? "text-secondary-green" : "text-white"
                  } font-medium text-lg`}
                >
                  {item?.name}
                </h3>
              </Link>
            </div>
          );
        })}

        <h3
          onClick={handleLogout}
          className="cursor-pointer absolute bottom-10 left-[6.5rem] text-center font-medium text-lg text-[white]"
        >
          Logout
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
