import { FaMoneyCheck } from "react-icons/fa";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import useMyAgreement from "../../../hooks/useMyAgreement";
import Loader from "./../../../components/Loader/Loader";
import { Link } from "react-router-dom";

const MakePayment = () => {
  // Get member agreement information --->
  const [myAgreement, isLoading] = useMyAgreement();
  const { user_details, apartmentNumber, floorNumber, blockName, rent } =
    myAgreement;

  if (isLoading) return <Loader />;

  return (
    <DashboardContainer>
      <div className="">
        {/* section header */}
        <div className="text-center">
          <h3 className="text-primary mb-2 text-lg">
            ----- Make Payment -----
          </h3>
          <h1 className="text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
            Securely Pay Your Monthly Rent <br /> in Just a Few Clicks!
          </h1>
          <hr className="my-4 border-accent w-2/3 mx-auto border-2" />
        </div>

        {/* main container */}
        <div className="bg-white mt-12 w-full md:w-4/5 lg:w-2/3 mx-auto px-4 py-8 md:py-10 md:px-6 lg:px-8">
          {/* form  */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* member email */}
              <div>
                <label className="text-lg font-semibold text-text">
                  Member Email
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={user_details.email}
                  className="mt-3 w-full input input-bordered rounded outline-none"
                />
              </div>
              {/* apartment number */}
              <div>
                <label className="text-lg font-semibold text-text">
                  Apartment
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={apartmentNumber}
                  className="mt-3 w-full input input-bordered rounded outline-none"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* floor number */}
              <div>
                <label className="text-lg font-semibold text-text">
                  Floor Number
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={floorNumber}
                  className="mt-3 w-full input input-bordered rounded outline-none"
                />
              </div>
              {/* block name */}
              <div>
                <label className="text-lg font-semibold text-text">
                  Block Name
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={blockName}
                  className="mt-3 w-full input input-bordered rounded outline-none"
                />
              </div>
              {/* apartment rent */}
              <div>
                <label className="text-lg font-semibold text-text">
                  Apartment Rent
                </label>
                <input
                  type="text"
                  readOnly
                  value={"$" + " " + rent + " " + "/monthly"}
                  className="mt-3 w-full input input-bordered rounded outline-none"
                />
              </div>
            </div>
            {/* select month */}
            <div className="mt-4">
              <label className="text-lg font-semibold text-text">
                Select month rent you want to pay
              </label>
              <select className="mt-3 rounded select select-bordered w-full">
                <option disabled>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            {/* pay button */}
            <div className="mt-5">
              <Link
                to={"/payment"}
                className="btn mx-auto w-2/3 bg-accent text-white text-base tracking-wider font-semibold rounded flex items-center gap-1 hover:bg-primary"
              >
                <FaMoneyCheck size={20} /> Pay{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default MakePayment;
