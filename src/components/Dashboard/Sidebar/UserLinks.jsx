import { CgProfile } from "react-icons/cg";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const UserLinks = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <NavLink
        to={"/dashboard"}
        end
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-2"
        }
      >
        <CgProfile size={25} />
        My-Profile
      </NavLink>

      <NavLink
        to={"/dashboard/announcements"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-2"
        }
      >
        <HiOutlineSpeakerphone size={25} /> Announcements
      </NavLink>
    </div>
  );
};

export default UserLinks;
