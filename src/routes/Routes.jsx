import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Apartments from "../pages/Apartments";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Announcements from "../pages/DashboardPages/Common/Announcements";
import ManageMembers from "../pages/DashboardPages/Admin/ManageMembers";
import AdminRoute from "./AdminRoute";
import MakeAnnouncement from "../pages/DashboardPages/Admin/MakeAnnouncement";
import ManageCoupons from "../pages/DashboardPages/Admin/ManageCoupons";
import Dashboard from "../pages/DashboardPages/Common/Dashboard";
import AgreementRequests from "../pages/DashboardPages/Admin/AgreementRequests";
import MemberRoute from "./MemberRoute";
import MakePayment from "../pages/DashboardPages/Member/MakePayment";
import PaymentHistory from "../pages/DashboardPages/Member/PaymentHistory";
import Payment from "../pages/DashboardPages/Member/Payment/Payment";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import NewsAndBlogs from "../pages/NewsAndBlogs";

const router = createBrowserRouter([
  // Main Layout Routes ----->
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>,
      },
      {
        path: "/news-and-blogs",
        element: <NewsAndBlogs />,
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
    errorElement: <ErrorPage />,
    children: [
      // common routes for all role --->
      {
        index: true,
        element: <Dashboard></Dashboard>,
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
        path: "agreement-requests",
        element: (
          <AdminRoute>
            <AgreementRequests />
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
      {
        path: "make-payment",
        element: (
          <MemberRoute>
            <MakePayment />
          </MemberRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <MemberRoute>
            <Payment />
          </MemberRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <MemberRoute>
            <PaymentHistory />
          </MemberRoute>
        ),
      },
    ],
  },
]);

export default router;
