import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import useRole from "../hooks/useRole";

const MemberRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [role, isLoading] = useRole();

  if (user && role === "member") return children;

  if (loading || isLoading) return <Loader />;

  return <Navigate state={location} to="/dashboard" />;
};

export default MemberRoute;
