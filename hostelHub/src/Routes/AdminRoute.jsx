import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminPending] = useAdmin();
  const location = useLocation();
  if (loading || isAdminPending) {
    return <p>Loading</p>;
  }
  if (user && isAdmin === "admin") {
    return children;
  }

  return <Navigate to={"/login"} replace />;
};

export default AdminRoute;
