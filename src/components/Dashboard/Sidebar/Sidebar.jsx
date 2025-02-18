import { Link } from "react-router-dom";
import logo from "../../../assets/vobon_logo.png";
import CommonLinks from "./CommonLinks";
import UserLinks from "./UserLinks";
import MemberLinks from "./MemberLinks";
import AdminLinks from "./AdminLinks";
import useRole from "../../../hooks/useRole";
import { MdOutlineDashboard } from "react-icons/md";

const Sidebar = () => {
  const [role] = useRole();

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
      {/* Logo container */}

      {/* Role Based Links */}
      <div className="flex-grow">
        {role === "user" && <UserLinks />}
        {role === "member" && <MemberLinks />}
        {role === "admin" && <AdminLinks />}
      </div>
      {/* Role Based Links */}

      <hr className="my-6 border border-white" />

      {/* Common Links */}
      <div className="bottom-0">
        <CommonLinks></CommonLinks>
      </div>
      {/* Common Links */}
    </div>
  );
};

export default Sidebar;
