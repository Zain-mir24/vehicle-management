import { useSelector } from "react-redux";
import { RootState } from "Store/store";
import BarIcon from "assets/bars.png";
import { useDispatch } from "react-redux";
import { ToogleSidebar } from "Store/Slices/SidebarSlice";
import { splitRoute } from "utils/helperFunctions";
import ProfileImage from "assets/profile.png";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const SidebarOpen = useSelector(
    (state: RootState) => state.sidebar.SidebarOpen
  );
  const userdata = JSON.parse(localStorage.getItem("user") as string);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center gap-4">
        {window.innerWidth <= 1024 && (
          <img
            src={BarIcon}
            alt="icon"
            className="w-[21px] cursor-pointer h-[24px]"
            onClick={() => {
              dispatch(ToogleSidebar(!SidebarOpen));
            }}
          />
        )}

        <h2 className="font-manrope text-[#18120F] text-base ">
          Admin {">"} {splitRoute(location.pathname)}
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-[40px] h-[40px] rounded-[50%] overflow-hidden border border-[#979797]">
          <img src={ProfileImage} className="w-full h-full " />
        </div>
        <div className="flex flex-col ">
          <h2 className="font-manrope text-[#18120F] text-[15px] font-semibold">
            {userdata?.username}
          </h2>
          <h4 className="text-xs font-normal text-[#6B6B6B]">User</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
