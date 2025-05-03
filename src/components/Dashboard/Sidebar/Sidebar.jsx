import { MdOutlineDashboard } from "react-icons/md";
import logo from "../../../assets/vobon_logo.png";
import useRole from "../../../hooks/useRole";
import { Link } from "react-router-dom";
import AdminLinks from "./AdminLinks";
import CommonLinks from "./CommonLinks";
import MemberLinks from "./MemberLinks";
import UserLinks from "./UserLinks";
import SidebarLinksLoader from "./SidebarSkeleton";

const Sidebar = () => {
  const [role, isLoading] = useRole();

  return (
    <div className="flex flex-col h-full">
      {/* Logo container */}
      <div className="flex flex-col gap-4">
        <div className="bg-white p-2 rounded">
          <Link to={"/"}>
            <img className="h-28 w-full" src={logo} alt="" />
          </Link>
        </div>
        <h3 className="text-center text-2xl tracking-widest text-white font-semibold flex items-center justify-center gap-2">
          <MdOutlineDashboard size={30} />
          Dashboard
        </h3>
      </div>

      <hr className="my-6 border border-white" />

      {/* Role Based Links */}
      <div className="flex-grow">
        {isLoading ? (
          <SidebarLinksLoader />
        ) : role === "user" ? (
          <UserLinks />
        ) : role === "member" ? (
          <MemberLinks />
        ) : role === "admin" ? (
          <AdminLinks />
        ) : null}
      </div>

      <hr className="my-6 border border-white" />

      {/* Common Links */}
      <div className="bottom-0">
        {isLoading ? (
          <div className="flex flex-col gap-3">
            {[...Array(1)].map((_, i) => (
              <div
                key={i}
                className="h-10 bg-white rounded w-full animate-pulse"
              />
            ))}
          </div>
        ) : (
          <CommonLinks />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
