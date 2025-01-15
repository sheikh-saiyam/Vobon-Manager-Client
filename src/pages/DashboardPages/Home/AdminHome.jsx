import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";
import Loader from "./../../../components/Loader/Loader";

const AdminHome = () => {
  const api_url = import.meta.env.VITE_API_URL;

  // Get admin-stats----->
  const { data: adminStats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axios(`${api_url}/admin-stats`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <div className="w-full">
      {/* admin stats container */}
      <div className="flex gap-6 items-center flew-wrap">
        {/* total apartments */}
        <div className="place-items-stretch grid h-auto bg-gradient-to-r from-accent to-[#b8e5ff] w-full justify-center items-center rounded gap-4 px-3 py-6">
          <div className="flex flex-col justify-start">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
              <MdOutlineApartment size={55} />{" "}
              <span className="mt-1">{adminStats.apartments}</span>
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
              Total Apartments
            </h3>
          </div>
        </div>
        {/* total users */}
        <div className="place-items-stretch grid h-auto bg-gradient-to-r from-[#D82DFF] to-[#FFDCFE] w-full justify-center items-center rounded gap-4 px-3 py-6">
          <div className="flex flex-col justify-start">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
              <FaUser size={45} />{" "}
              <span className="mt-1">{adminStats.users}</span>
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
              Total Users
            </h3>
          </div>
        </div>
        {/* total members */}
        <div className="place-items-stretch grid h-auto bg-gradient-to-r from-[#FF0E5F] to-[#ff90b3] w-full justify-center items-center rounded gap-4 px-3 py-6">
          <div className="flex flex-col justify-start">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
              <FaUsersGear size={50} />{" "}
              <span className="mt-1">{adminStats.members}</span>
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
              Total Members
            </h3>
          </div>
        </div>
      </div>
      {/* admin profile */}
      <div className="w-full lg:w-6/12"></div>
    </div>
  );
};

export default AdminHome;
