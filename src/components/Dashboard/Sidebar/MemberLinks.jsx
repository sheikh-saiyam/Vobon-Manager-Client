import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoMdCard } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MemberLinks = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
            : "border-2 border-white text-white font-medium hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-2"
        }
      >
        <CgProfile size={25} />
        My-Profile
      </NavLink>

      <NavLink
        to={"/dashboard/payment"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
            : "border-2 border-white text-white font-medium hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-2"
        }
      >
        <IoMdCard size={25} />
        Make Payment
      </NavLink>

      <NavLink
        to={"/dashboard/payment-history"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-4 flex items-center gap-3"
            : "border-2 border-white text-white font-medium hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-3"
        }
      >
        <FaHistory size={20} />
        Payment History
      </NavLink>

      <NavLink
        to={"/dashboard/announcements"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
            : "border-2 border-white text-white font-medium hover:bg-white hover:text-primary duration-300 text-lg py-1 px-4 flex items-center gap-2"
        }
      >
        <HiOutlineSpeakerphone size={25} />
        Announcements
      </NavLink>
    </div>
  );
};

export default MemberLinks;
