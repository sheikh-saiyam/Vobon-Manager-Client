import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";
import useRole from "../hooks/useRole";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [, isLoading] = useRole();

  if (user && user.email) return children;

  if (loading || isLoading) return <Loader />;

  return <Navigate state={location} to="/login" />;
};

export default PrivateRoute;
