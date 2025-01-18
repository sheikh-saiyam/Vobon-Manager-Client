import { MdApartment, MdMessage } from "react-icons/md";
import MyProfile from "../Common/MyProfile";
import { FaInfoCircle } from "react-icons/fa";

const UserHome = () => {
  return (
    <div>
      <div className="flex flex-col md:flex md:flex-row items-center gap-6 w-full">
        {/* user profile */}
        <div className="w-full md:w-7/12 h-full">
          <MyProfile></MyProfile>
        </div>

        {/* user agreement & apartment information container */}
        <div className="mt-6 md:mt-12 h-full w-full md:w-5/12 bg-white shadow rounded shadow-gray-300 p-4 md:p-6">
          {/* main text div */}
          <div className="mt-3">
            <h1 className="text-lg md:text-xl text-text font-semibold tracking-wide flex items-center gap-1">
              <FaInfoCircle />
              Your Agreement Information
            </h1>
          </div>
          <div className="mt-4 text-text">
            {/* agreement information */}
            <div className="mt-3 py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
              <h1>
                Agreement request date:{" "}
                <span className="font-medium">None</span>
              </h1>
            </div>
            <div className="mt-3 py-2 px-2 bg-[#fff] shadow rounded text-base tracking-wider font-semibold">
              <h1>
                Agreement accept date: <span className="font-medium">None</span>
              </h1>
            </div>
            {/* apartment information */}
            <div>
              <h1 className="mt-4 text-lg md:text-xl text-text font-semibold tracking-wide flex items-center gap-1">
                <MdApartment size={30} />
                Apartment Information
              </h1>
              <div className="mt-2 space-y-2">
                <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Apartment: <span className="font-medium">None</span>
                  </h1>
                </div>
                <div className="flex gap-2 w-full">
                  <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                    <h1>
                      Floor Number: <span className="font-medium">None</span>
                    </h1>
                  </div>
                  <div className="py-2 px-2 w-full bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                    <h1>
                      Block Name: <span className="font-medium">None</span>
                    </h1>
                  </div>
                </div>
                <div className="py-2 px-2 bg-[#fff] shadow-md drop-shadow-sm h-full rounded text-base tracking-wider font-semibold">
                  <h1>
                    Apartment Rent: <span className="font-medium">None</span>
                  </h1>
                </div>
              </div>
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
          <h1 className="text-lg md:text-xl tracking-wide lg:text-2xl font-semibold text-text">User Notice: Agreement Request Status
          </h1>
        </div>
        <div className="mt-1">
          <p className="text-base font-medium tracking-wider text-text">If you have requested an agreement, please wait your agreement request is still pending or has not been accepted by the owner. Once accepted, you&apos;ll gain access to your agreement, and your role will be updated to Member. Thank you for your patience!</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
