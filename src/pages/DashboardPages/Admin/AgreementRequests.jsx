import { FaCheckSquare } from "react-icons/fa";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import { FaCircleXmark } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();

  // Get all agreement requests ----->
  const {
    data: agreementRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["agreement-requests"],
    queryFn: async () => {
      const { data } = await axiosSecure("/all-agreement-requests");
      return data;
    },
  });

  console.log(agreementRequests);

  return (
    <DashboardContainer>
      <SectionHeader
        subHeading={"Agreement Requests"}
        heading={"Manage and Track \n All Agreements"}
      />

      {/* Main Container */}
      <div className="bg-white mt-12 p-6">
        {/* text div */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
            Total Agreement Requests:{" "}
            <span className="font-medium">{agreementRequests.length}</span>
          </h1>
        </div>

        {/* Coupons table */}
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-primary text-white text-lg">
              <tr>
                <th className="py-4">User Name & Email</th>
                <th className="py-4 text-base">
                  Apartment
                  <br /> Information
                </th>
                <th className="py-4">Rent</th>
                <th className="py-4 text-base">
                  Agreement <br /> Request Date
                </th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {agreementRequests.map((agreementRequest) => (
                <tr key={agreementRequest._id} className="text-base text-text">
                  <td className="py-4">
                    <h1 className="font-semibold">
                      Name:{" "}
                      <span className="font-medium">
                        {agreementRequest.user_details.name}
                      </span>
                    </h1>
                    <h1 className="font-semibold">
                      Email:{" "}
                      <span className="font-medium text-blue-600 underline underline-offset-2">
                        {agreementRequest.user_details.email}
                      </span>
                    </h1>
                  </td>
                  <td className="font-semibold">
                    <h1>
                      Apartment:{" "}
                      <span className="font-medium">
                        {agreementRequest.apartmentNumber}
                      </span>
                    </h1>
                    <h1>
                      Floor Number:{" "}
                      <span className="font-medium">
                        {agreementRequest.floorNumber}
                      </span>
                    </h1>
                    <h1>
                      Block Name:{" "}
                      <span className="font-medium">
                        {agreementRequest.blockName}
                      </span>
                    </h1>
                  </td>
                  <td className="font-bold text-3xl tracking-widest">
                    ${agreementRequest.rent}
                  </td>
                  <td className="font-semibold tracking-widest">
                    {agreementRequest.agreement_request_date.split("T")[0]}
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2 items-center">
                      <div
                        className="tooltip tooltip-top"
                        data-tip="Accept Agreement"
                      >
                        <button className="bg-accent hover:tooltip-open  text-white font-bold btn w-full">
                          <FaCheckSquare size={28} />
                        </button>
                      </div>
                      <div
                        className="tooltip tooltip-top"
                        data-tip="Reject Agreement"
                      >
                        <button className="bg-red-500 hover:tooltip-open  text-white font-bold btn w-full">
                          <FaCircleXmark size={28} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Coupons table */}
      </div>
      {/* Main Container */}
    </DashboardContainer>
  );
};

export default AgreementRequests;
