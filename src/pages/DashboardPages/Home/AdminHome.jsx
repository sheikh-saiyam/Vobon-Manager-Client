import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";
import Loader from "./../../../components/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import { IoStatsChartSharp } from "react-icons/io5";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role] = useRole();

  // Get admin-stats----->
  const { data: adminStats, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/admin-stats`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <div className="w-full">
      {/* admin stats container */}
      <div className="my-6 flex gap-6 items-center flex-wrap md:flex-nowrap">
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

      <div className="flex flex-col lg:flex lg:flex-row gap-6">
        {/* admin profile */}
        <div className="w-full lg:w-7/12">
          <div className="bg-white pb-6 shadow-md rounded shadow-gray-300">
            {/* image div */}
            <div className="relative h-fit">
              <img
                className="h-[200px] w-full object-cover"
                src="https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg"
                alt=""
              />
              {/* <!-- Profile Image --> */}
              <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2">
                <img
                  className="h-[150px] w-[150px] rounded-full border-4 border-white shadow-md"
                  referrerPolicy="no-referrer"
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            {/* image div */}
            <div className="mt-[90px] px-4">
              <div>
                <h1 className="py-2 px-4 w-fit mx-auto rounded-xl tracking-widest bg-primary text-white font-semibold">
                  <span className="font-bold">Role: </span>
                  {role}
                </h1>
              </div>
              <div className="text-center mt-4 space-y-1">
                <h1 className="text-lg text-text font-medium tracking-wider">
                  {user?.displayName}
                </h1>
                <h1 className="text-lg text-text font-medium tracking-wider">
                  {user.email}
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* admin stats */}
        <div className="w-full lg:w-5/12">
          <h1 className="flex gap-2 items-center text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
            <IoStatsChartSharp />
            Apartments Stats
          </h1>
          {/* Apartments Stats */}
          <div className="my-6 space-y-6">
            {/* available apartments */}
            <div className="place-items-stretch grid h-auto bg-gradient-to-r from-[#A3A3A3] to-[#D4D4D4] w-full justify-center items-center rounded gap-4 px-3 py-6">
              <div className="flex flex-col justify-start">
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
                  <MdOutlineApartment size={55} />{" "}
                  <span className="mt-1">100%</span>
                </h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
                  Available Apartments
                </h3>
              </div>
            </div>
            {/* Agreement apartments */}
            <div className="place-items-stretch grid h-auto bg-gradient-to-r from-[#474747] to-[#2c2c2c] w-full justify-center items-center rounded gap-4 px-3 py-6">
              <div className="flex flex-col justify-start">
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
                  <MdOutlineApartment size={55} />{" "}
                  <span className="mt-1">0%</span>
                </h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
                  Agreement Apartments
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
