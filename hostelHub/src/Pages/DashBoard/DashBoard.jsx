import { Link, Outlet } from "react-router-dom";
import AdminDetails from "./AdminDashBoard/AdminDetails/AdminDetails";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useUserBadge from "../../Hooks/useUserBadge";
import ThemeLogo from "../../Components/ThemeLogo";

const DashBoard = () => {
  const [isAdmin, , count, refetch] = useAdmin();
  const { user, loading } = useAuth();
  const email = user?.email;
  const { badge } = useUserBadge({ email, loading });

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet />
          <label htmlFor="my-drawer" className="btn lg:hidden drawer-button">
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-40 lg:w-72 p-4">
            {/* Sidebar content here */}

            {isAdmin === "admin" ? (
              <>
                <ThemeLogo />
                <AdminDetails
                  text={"Number of meal added:"}
                  value={count.addCount}
                />
                <li>
                  <Link to={"/dashboard/addMeal"}>Add Meal</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manageUsers"}>Manage Users</Link>
                </li>
                <li>
                  <Link to={`/dashboard/allMeals`}>All Meal</Link>
                </li>
                <li>
                  <Link to={"/dashboard/allReviews"}>All Reviews</Link>
                </li>
                <li>
                  <Link to={"/dashboard/serveMeals"}>Serve Meal</Link>
                </li>
                <li>
                  <Link to={"/dashboard/upcomingMeal"}>Upcoming meal</Link>
                </li>
              </>
            ) : (
              <>
                <ThemeLogo />
                <AdminDetails text={"Badge:"} value={badge} />
                <li>
                  <Link to={"/dashboard/requestedMeals"}>Requested Meals</Link>
                </li>
                <li>
                  <Link to={"/dashboard/myReviews"}>My Reviews</Link>
                </li>
                <li>
                  <Link to={"/dashboard/transections"}>Payment History</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
