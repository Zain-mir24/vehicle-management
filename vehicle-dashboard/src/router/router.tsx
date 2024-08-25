import { createBrowserRouter } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Verification from "pages/Verification";
import AdminRoutes from "./routes/AdminRoutes";
const AppRouter = () => {
  const routes = [
    {
      path: "/signin",
      element: (
        <PublicRoute>
          <Signin />
        </PublicRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <Signup />
        </PublicRoute>
      ),
    },
    {
      path: "/verification",
      element: (
        <PublicRoute>
          <Verification />
        </PublicRoute>
      ),
    },
    ...AdminRoutes,
    // ...dynamicRoutes,
  ];
  const router = createBrowserRouter(routes);

  return router;
};

export default AppRouter;
