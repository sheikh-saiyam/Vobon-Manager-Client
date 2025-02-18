import { MdApartment } from "react-icons/md";
import MyProfile from "../Common/MyProfile";
import { FaInfoCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaHandshakeSimple } from "react-icons/fa6";

const UserHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Get user requested agreement data --->
  const { data: myRequestedAgreement = {} } = useQuery({
    queryKey: ["my-requested-agreement", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/my-requested-agreement/${user?.email}`
      );
      return data;
    },
  });

  // Get all agreement data -->
  const {
    apartmentNumber,
    floorNumber,
    blockName,
    rent,
    agreement_request_date,
    agreement_status,
  } = myRequestedAgreement || {};

  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row items-center gap-6 w-full">
        {/* user profile */}
        <div className="w-full md:w-7/12 h-full">
          <MyProfile></MyProfile>
        </div>

        {/* user agreement & apartment information container */}
        <div className="mt-6 md:mt-12 h-full w-full md:w-5/12 bg-white shadow rounded shadow-gray-300 px-4 md:px-6 py-4">
          {/* main text div */}
          <div>
            <h1 className="text-lg md:text-xl text-text font-semibold tracking-widest flex gap-2">
              <FaInfoCircle size={25} className="mt-[2px]" />
              {myRequestedAgreement.user_email
                ? "Your Requested Agreement Information"
                : "You haven’t Requested Any Agreement Yet."}
            </h1>
          </div>
          <div className="mt-4 text-text">
            {/* agreement information */}
            <div className="mt-3 py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
              <h1>
                Agreement Status:{" "}
                <span
                  className={`font-medium ${
                    agreement_status &&
                    "ml-2 font-medium rounded px-3 py-[3px] "
                  } ${
                    agreement_status === "pending" &&
                    "bg-yellow-100 text-yellow-700"
                  } ${
                    agreement_status === "rejected" && "bg-red-100 text-red-600"
                  }`}
                >
                  {agreement_status
                    ? agreement_status === "pending"
                      ? "Pending"
                      : "Rejected"
                    : "None"}
                </span>
              </h1>
            </div>
            <div className="mt-3 py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
              <h1>
                Agreement request date:{" "}
                <span className="font-medium">
                  {agreement_request_date ? agreement_request_date : "None"}
                </span>
              </h1>
            </div>
            {/* apartment information */}
            <div>
              <h1 className="mt-4 text-lg md:text-xl text-text font-semibold tracking-widest flex gap-1">
                <MdApartment size={30} />
                {myRequestedAgreement.user_email
                  ? "Your Requested Agreement Apartment Information"
                  : "No Apartment Information Available."}
              </h1>
              <div className="mt-2 space-y-2">
                <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Apartment Number:{" "}
                    <span className="font-medium">
                      {apartmentNumber ? apartmentNumber : "None"}
                    </span>
                  </h1>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                    <h1>
                      Floor Number:{" "}
                      <span className="font-medium">
                        {floorNumber ? floorNumber : "None"}
                      </span>
                    </h1>
                  </div>
                  <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                    <h1>
                      Block Name:{" "}
                      <span className="font-medium">
                        {blockName ? blockName : "None"}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Apartment Rent:{" "}
                    <span className="font-medium">{rent ? rent : "None"}</span>
                  </h1>
                </div>
              </div>
            </div>
            {/* make agreement button */}
            <div className={`w-2/3 mx-auto`}>
              {!myRequestedAgreement.user_email && (
                <Link
                  to={"/apartments"}
                  className="mt-4 mx-auto w-full bg-accent text-white text-base tracking-wider font-semibold rounded flex items-center gap-[6px] hover:bg-primary py-2 px-2 justify-center"
                >
                  <FaHandshakeSimple className="mt-[1px]" size={25} /> Make
                  Agreement
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Important MSG for user */}
      <div className="mt-14 bg-white border rounded border-[#dddddd] p-4 shadow shadow-[#dddddd]">
        <div className="flex gap-3 items-center">
          <img
            className="w-16 h-16"
            src="https://cdn-icons-png.flaticon.com/512/8743/8743806.png"
            alt="announcement image"
          />
          <h1 className="text-lg md:text-xl tracking-wide lg:text-2xl font-semibold text-text">
            User Notice: Agreement Request Status
          </h1>
        </div>
        <div className="mt-1">
          <p className="text-base font-medium tracking-wider text-text">
            If you have requested an agreement, please wait your agreement
            request is still pending or has not been accepted by the owner. Once
            accepted, you&apos;ll gain access to your agreement, and your role
            will be updated to Member. Thank you for your patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
