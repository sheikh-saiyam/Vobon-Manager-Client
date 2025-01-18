import { FaInfoCircle, FaMoneyCheck } from "react-icons/fa";
import MyProfile from "../Common/MyProfile";
import { MdApartment } from "react-icons/md";
import useMyAgreement from "../../../hooks/useMyAgreement";
import { Link } from "react-router-dom";
import Loader from "./../../../components/Loader/Loader";

const MemberHome = () => {
  // Get member agreement information --->
  const [myAgreement, isLoading] = useMyAgreement();
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col md:flex md:flex-row items-center gap-6 w-full">
      {/* member profile */}
      <div className="w-full md:w-7/12 h-full">
        <MyProfile></MyProfile>
      </div>

      {/* agreement & apartment information container */}
      <div className="mt-6 md:mt-12 h-full w-full md:w-5/12 bg-white shadow rounded shadow-gray-300 p-4 md:p-6">
        {/* main text div */}
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl text-text font-semibold tracking-wide flex items-center gap-1">
            <FaInfoCircle />
            Your Agreement Information
          </h1>
        </div>
        <div className="mt-4 text-text">
          {/* agreement information */}
          <div className="py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
            <h1>
              Agreement request date:{" "}
              <span className="font-medium">
                {myAgreement.agreement_request_date.split("T")[0]}
              </span>
            </h1>
          </div>
          <div className="mt-3 py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
            <h1>
              Agreement accept date:{" "}
              <span className="font-medium">
                {myAgreement.agreement_accept_date.split("T")[0]}
              </span>
            </h1>
          </div>
          {/* apartment information */}
          <div>
            <h1 className="mt-4 text-lg md:text-xl lg:text-2xl text-text font-semibold tracking-wide flex items-center gap-1">
              <MdApartment size={30} />
              Apartment Information
            </h1>
            <div className="mt-2 space-y-2">
              <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                <h1>
                  Apartment:{" "}
                  <span className="font-medium">
                    {myAgreement.apartmentNumber}
                  </span>
                </h1>
              </div>
              <div className="flex gap-2 w-full">
                <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Floor Number:{" "}
                    <span className="font-medium">
                      {myAgreement.floorNumber}
                    </span>
                  </h1>
                </div>
                <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Block Name:{" "}
                    <span className="font-medium">{myAgreement.blockName}</span>
                  </h1>
                </div>
              </div>
              <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                <h1>
                  Apartment Rent:{" "}
                  <span className="font-medium">
                    ${myAgreement.rent}
                    <span className="text-xs">/Monthly</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
          {/* make payment button */}
          <div className="mt-4 w-2/3 mx-auto">
            <Link
              to={"/make-payment"}
              className="btn mx-auto w-full bg-accent text-white text-base tracking-wider font-semibold rounded flex items-center gap-1 hover:bg-primary"
            >
              <FaMoneyCheck size={20} />
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberHome;
