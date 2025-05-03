import { Navigate, useLocation } from "react-router-dom";
import DashboardLoader from "../components/Loader/DashboardLoader";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [, isLoading] = useRole();

  if (user && user.email) return children;

  if (loading || isLoading) return <DashboardLoader />;

  return <Navigate state={location} to="/login" />;
};

export default PrivateRoute;
