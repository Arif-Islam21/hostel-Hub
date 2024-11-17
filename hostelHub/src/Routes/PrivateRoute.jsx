import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <p className="text-6xl text-red-700">Loading</p>;
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ form: location }} replace />;
};

export default PrivateRoute;
