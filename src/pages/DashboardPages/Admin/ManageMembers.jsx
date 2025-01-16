import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader/Loader";
import { HiUserRemove } from "react-icons/hi";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();

  // get all members data --->
  const { data: members = [], isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-members`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <DashboardContainer>
      <SectionHeader
        subHeading={"Manage Members"}
        heading={"Manage members with ease"}
      />

      {/* main container */}
      <div className="bg-white mt-12 w-full md:w-11/12 lg:w-10/12 mx-auto p-4 md:p-6 lg:p-8">
        {/* text div */}
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
            Total Members: <span className="font-medium">{members.length}</span>
          </h1>
        </div>
        {/* text div */}

        {/* members table */}
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-primary text-white text-lg">
              <tr>
                <th className="py-4"></th>
                <th className="py-4">Member Name</th>
                <th className="py-4">Member Email</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr key={member._id} className="text-base">
                  <th className="py-4">{idx + 1}</th>
                  <td className="py-4 flex gap-3 items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={member.photo}
                      alt=""
                    />
                    <h1>{member.name}</h1>
                  </td>
                  <td className="py-4">{member.email}</td>
                  <td className="py-4">
                    <div className="flex gap-2 items-center">
                      <div
                        className="tooltip tooltip-top"
                        data-tip="Remove Member"
                      >
                        <button className="bg-red-500 hover:tooltip-open  text-white font-bold btn w-full">
                          <HiUserRemove size={30} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* members table */}
      </div>
      {/* main container */}
    </DashboardContainer>
  );
};

export default ManageMembers;
