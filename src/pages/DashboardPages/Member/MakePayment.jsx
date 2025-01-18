import DashboardContainer from "../../../components/Container/DashboardContainer";

const MakePayment = () => {
  return (
    <DashboardContainer>
      {/* section header */}
      <div className="text-center">
        <h3 className="text-primary mb-2 text-lg">----- Make Payment -----</h3>
        <h1 className="text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
          Securely Pay Your Monthly Rent <br/> in Just a Few Clicks!
        </h1>
        <hr className="my-4 border-accent w-2/3 mx-auto border-2" />
      </div>
    </DashboardContainer>
  );
};

export default MakePayment;
