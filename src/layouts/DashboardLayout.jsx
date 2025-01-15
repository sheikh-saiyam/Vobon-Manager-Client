import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  // for responsive menu close & open --->
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  // for responsive menu close & open --->
  return (
    <div className="w-full flex">
      {/* left side navigation panel */}
      <div
        className={`fixed xl:relative top-0 ${
          isSidebarOpen ? "left-0" : "-left-full"
        } xl:left-0 min-w-2/12 xl:w-3/12 max-w-[300px] md:max-w-[360px] min-h-screen bg-primary p-6 transition-all duration-500 z-50`}
      >
        <Sidebar onToggleSidebar={toggleSidebar} />
      </div>
      {/* left side navigation panel */}
      {/* right side dashboard content */}
      <div className="w-full bg-[#f6f6f6]">
        {/* Mobile menu open & close button */}
        <button
          className="xl:hidden p-3 text-primary bg-white shadow-lg border absolute top-4 right-4 z-50"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <MdClose size={27} className="text-primary" />
          ) : (
            <IoMenu size={27} className="text-primary" />
          )}
        </button>
        {/* Mobile menu open & close button */}
        <Outlet></Outlet>
      </div>
      {/* right side dashboard content */}
    </div>
  );
};

export default DashboardLayout;
