import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Home/Main";
import Home from "../Pages/Home/Home";
import App from "../App";
import Checkout from "../Pages/Home/Checkout/Checkout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import DisplayMeal from "../Pages/MealDetails/DisplayMeal/DisplayMeal";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddMeal from "../Pages/DashBoard/AdminDashBoard/AdminDetails/AddMeal/AddMeal";
import ManageUsers from "../Pages/DashBoard/AdminDashBoard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllMeals from "../Pages/DashBoard/AdminDashBoard/AllMeals/AllMeals";
import DisplayAllMeals from "../Pages/Home/AllMeals/DisplayAllMeals";
import RequestedMeal from "../Pages/DashBoard/UserDashBoard/RequestedMeal/RequestedMeal";
import MyReviews from "../Pages/DashBoard/UserDashBoard/MyReviews/MyReviews";
import UserTransections from "../Pages/DashBoard/UserDashBoard/UserTransections/UserTransections";
import AllReviews from "../Pages/DashBoard/AdminDashBoard/AllReviews/AllReviews";
import ServeMeal from "../Pages/DashBoard/AdminDashBoard/ServeMeal/ServeMeal";
import UpcomingMeal from "../Pages/DashBoard/AdminDashBoard/UpcomingMeal/UpcomingMeal";
import UpcomingMeals from "../Pages/UpcomingMeals/UpcomingMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout/:category/:amount",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/mealDetails/:id",
        element: (
          <PrivateRoute>
            <DisplayMeal />
          </PrivateRoute>
        ),
      },
      {
        path: "/meals",
        element: <DisplayAllMeals />,
      },
      {
        path: "/upcomingMeals",
        element: (
          <PrivateRoute>
            <UpcomingMeals />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "addMeal",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },
      {
        path: "serveMeals",
        element: (
          <AdminRoute>
            <ServeMeal />
          </AdminRoute>
        ),
      },
      {
        path: "upcomingMeal",
        element: (
          <AdminRoute>
            <UpcomingMeal />
          </AdminRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "requestedMeals",
        element: (
          <PrivateRoute>
            <RequestedMeal />
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "transections",
        element: (
          <PrivateRoute>
            <UserTransections />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
