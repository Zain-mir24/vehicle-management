import { lazy } from "react";
import { TCommonRoutesProps } from "types";
import PrivateRoute from "../PrivateRoute";
import { Navigate } from "react-router-dom";
import Layout from "layout";
// import { Layout } from "Layout";

const AdminDashboard = lazy(() => import("../../pages/Dashboard"));
const Categories = lazy(() => import("../../pages/Categories"));
const Cars = lazy(() => import("../../pages/Cars"));
const AdminRoutes: TCommonRoutesProps[] = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "cars",
        element: (
          <PrivateRoute>
            <Cars />
          </PrivateRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
    ],
  },
];
export default AdminRoutes;
