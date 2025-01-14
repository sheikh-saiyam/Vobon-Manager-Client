import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (user && user.email) return children;

  if (loading) return <Loader></Loader>;

  return <Navigate state={location} to="/login" />;
};

export default PrivateRoute;
