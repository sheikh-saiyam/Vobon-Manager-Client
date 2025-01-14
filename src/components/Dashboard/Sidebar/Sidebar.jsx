import { Link } from "react-router-dom";
import logo from "../../../assets/Vobon.png";
import CommonLinks from "./CommonLinks";
import UserLinks from "./UserLinks";
import MemberLinks from "./MemberLinks";
import AdminLinks from "./AdminLinks";

const Sidebar = () => {
  const role = "user";

  return (
    <div className="flex flex-col h-full">
      {/* Logo container */}
      <div className="flex flex-col gap-4">
        <Link to={"/"}>
          <img className="h-28 w-full" src={logo} alt="" />
        </Link>
        <h3 className="text-center text-2xl tracking-wider text-white font-semibold">
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
