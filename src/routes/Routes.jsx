import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Apartments from "../pages/Apartments";

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
]);

export default router;
