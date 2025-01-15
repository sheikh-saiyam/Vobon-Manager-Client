import DashboardContainer from "../../../components/Container/DashboardContainer";
import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import useRole from "../../../hooks/useRole";
import AdminHome from "../Home/AdminHome";
import MemberHome from "../Home/MemberHome";
import UserHome from "../Home/UserHome";

const Dashboard = () => {
  const [role] = useRole();
  return (
    <DashboardContainer>
      <SectionHeader
        heading={"Welcome To Dashboard"}
        subHeading={role !== "admin" ? "My Profile" : "Admin Profile"}
      />

      {/* role based dashboard home page */}
      {role === "user" && <UserHome />}
      {role === "member" && <MemberHome />}
      {role === "admin" && <AdminHome />}
      {/* role based dashboard home page */}
    </DashboardContainer>
  );
};

export default Dashboard;
