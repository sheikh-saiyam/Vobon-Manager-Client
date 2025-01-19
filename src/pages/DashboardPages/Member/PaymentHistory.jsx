import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loader from "./../../../components/Loader/Loader";
import { FaMoneyCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Get all payment-history --->
  const { data: paymentHistory = [], isLoading } = useQuery({
    queryKey: ["payment-history", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/my-payment-history/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
    <DashboardContainer>
      <div className="min-h-screen">
        {/* section header */}
        <div className="text-center">
          <h3 className="text-primary mb-2 text-lg">
            ----- Payment History -----
          </h3>
          <h1 className="text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
            View Your Complete Monthly Rent <br /> Payment History
          </h1>
          <hr className="my-4 border-accent w-2/3 mx-auto border-2" />
        </div>

        {/* payment history container */}
        <div className="bg-white mt-12 w-full lg:w-11/12 mx-auto p-4 md:p-6 lg:p-8">
          {paymentHistory.length === 0 ? (
            <>
              <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide text-center">
                No payment history found. <br /> Please make a payment to view
                your transaction details.
              </h1>
              <div className="w-1/2 md:w-1/3 mt-6 mx-auto">
                <Link
                  to={"/dashboard/make-payment"}
                  className="w-full h-full btn rounded bg-accent text-white text-lg font-medium flex items-center gap-2 hover:bg-primary"
                >
                  <FaMoneyCheck size={20} />
                  Make Payment
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* text div */}
              <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
                  Complete Payments:{" "}
                  <span className="font-medium">{paymentHistory.length}</span>
                </h1>
              </div>
              {/* text div */}

              {/* payment-history table */}
              <div className="overflow-x-auto mt-6">
                <table className="table">
                  {/* head */}
                  <thead className="bg-primary text-white text-lg">
                    <tr>
                      <th className="py-4">Payment Month</th>
                      <th className="py-4 px-8 text-center">Payment Date</th>
                      <th className="py-4 px-8 text-base text-center">
                        Payment <br /> Amount
                      </th>
                      <th className="py-4 px-8">Payment Transaction ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentHistory.map((history) => (
                      <tr key={history._id} className="text-base">
                        <td className="py-4">{history.payment_month}</td>
                        <td className="py-4 px-8 text-center">
                          {history.payment_date.split("T")[0]}
                        </td>
                        <td className="py-4 px-8 text-center">
                          ${history.payment_amount}
                        </td>
                        <td className="py-4 px-8">{history.transaction_id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* payment-history table */}
            </>
          )}
        </div>
        {/* payment history container */}
      </div>
    </DashboardContainer>
  );
};

export default PaymentHistory;
