import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomeScreen/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import NavigateAuth from "../layouts/NavigateAuth";
import AddFriend from "../pages/NavigatePage/AddFriend";
import Reels from "../pages/NavigatePage/Reels";
import Notification from "../pages/NavigatePage/Notification";
import PostImage from "../pages/FetchAPI/PostImage";

export const mainRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        // path: "",
        index: true,
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "dash",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/Navigate",
    element: <NavigateAuth />,
    children: [
      {
        path: "add",
        element: <AddFriend />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/create",
    element: <PostImage />,
  },
]);
