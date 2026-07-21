import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Institutions from "../pages/Institutions";
import Programs from "../pages/Programs";
import Courses from "../pages/Courses";
import Login from "../pages/Login";

import ProtectedRoute from "../auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "institutions",
        element: <Institutions />,
      },

      {
        path: "programs",
        element: <Programs />,
      },

      {
        path: "courses",
        element: <Courses />,
      },
    ],
  },
]);