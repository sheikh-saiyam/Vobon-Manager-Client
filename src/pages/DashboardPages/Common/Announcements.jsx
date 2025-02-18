import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import Loader from "./../../../components/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  // Get All Announcements ----->
  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/announcements`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <DashboardContainer>
      <SectionHeader
        heading={"Stay Updated with Latest News"}
        subHeading={"Announcements "}
      />

      {/* main container */}
      <div className="bg-white rounded mt-12 w-full lg:w-11/12 mx-auto p-4 md:p-6">
        {/* text div */}
        <div>
          <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
            Total Announcements:{" "}
            <span className="font-medium">{announcements.length}</span>
          </h1>
        </div>
        <div className="mt-6 grid gap-6 grid-cols-1">
          {[...announcements].reverse().map((announcement) => (
            <div
              key={announcement._id}
              className="border rounded border-[#dddddd] p-4 shadow shadow-[#dddddd]"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="w-16 h-16"
                  src="https://cdn-icons-png.flaticon.com/512/8743/8743806.png"
                  alt="announcement image"
                />
                <h1 className="text-lg md:text-xl tracking-wide lg:text-2xl font-semibold text-text">
                  {announcement.title}
                </h1>
              </div>
              <div className="mt-3">
                <p className="text-base font-medium tracking-wider text-text whitespace-pre-line">
                  {announcement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* main container */}
    </DashboardContainer>
  );
};

export default Announcements;
