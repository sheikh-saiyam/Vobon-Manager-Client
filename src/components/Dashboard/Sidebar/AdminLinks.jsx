import { BiSolidCoupon } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdAdminPanelSettings, MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminLinks = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <NavLink
        to={"/dashboard"}
        end
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-3 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-3 flex items-center gap-2"
        }
      >
        <MdAdminPanelSettings size={25} />
        Admin-Profile
      </NavLink>

      <NavLink
        to={"/dashboard/make-announcement"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-3 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-3 flex items-center gap-2"
        }
      >
        <HiOutlineSpeakerphone size={25} />
        Make Announcement
      </NavLink>

      <NavLink
        to={"/dashboard/agreement-requests"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-3 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-3 flex items-center gap-2"
        }
      >
        <FaHandshakeSimple size={25} />
        Agreement Requests
      </NavLink>

      <NavLink
        to={"/dashboard/manage-members"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-3 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-3 flex items-center gap-2"
        }
      >
        <MdManageAccounts size={25} />
        Manage Members
      </NavLink>

      <NavLink
        to={"/dashboard/manage-coupons"}
        className={({ isActive }) =>
          isActive
            ? "bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-3 flex items-center gap-2"
            : "border-2 border-white text-white font-semibold hover:bg-white hover:text-primary duration-300 text-lg py-1 px-3 flex items-center gap-2"
        }
      >
        <BiSolidCoupon size={25} />
        Manage Coupons
      </NavLink>
    </div>
  );
};

export default AdminLinks;
