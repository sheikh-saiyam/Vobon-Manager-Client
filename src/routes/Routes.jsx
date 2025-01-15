import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Apartments from "../pages/Apartments";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/DashboardPages/Common/MyProfile";
import Announcements from "../pages/DashboardPages/Common/Announcements";
import ManageMembers from "../pages/DashboardPages/Admin/ManageMembers";
import AdminRoute from "./AdminRoute";
import MakeAnnouncement from "../pages/DashboardPages/Admin/MakeAnnouncement";
import ManageCoupons from "../pages/DashboardPages/Admin/ManageCoupons";

const router = createBrowserRouter([
  // Main Layout Routes ----->
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>,
      },
      // Authentication routes --->
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // Authentication routes --->
    ],
  },
  // Dashboard Layout Routes ----->
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // common routes for all role --->
      {
        index: true,
        element: <MyProfile></MyProfile>,
      },
      {
        path: "announcements",
        element: <Announcements></Announcements>,
      },
      // admin routes ----->
      {
        path: "make-announcement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <AdminRoute>
            <ManageMembers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
      // member routes ----->
      // user routes ----->
    ],
  },
]);

export default router;
