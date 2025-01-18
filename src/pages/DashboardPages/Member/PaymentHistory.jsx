import DashboardContainer from "../../../components/Container/DashboardContainer";

const PaymentHistory = () => {
  return (
    <DashboardContainer>
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
        {/* text div */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
            Complete Payments: <span className="font-medium">3</span>
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
                <th className="py-4 px-8">Payment Amount</th>
                <th className="py-4 px-8">Payment Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base">
                <td className="py-4">January</td>
                <td className="py-4 px-8">$150</td>
                <td className="py-4 px-8">pi_3QgQUaHFQO7rYaGg0w7Vlfkt</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* payment-history table */}
      </div>
    </DashboardContainer>
  );
};

export default PaymentHistory;
