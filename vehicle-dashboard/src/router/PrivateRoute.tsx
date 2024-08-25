/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const authToken = sessionStorage.getItem("Token") as string;
  return authToken !== "" && authToken !== null ? (
    <>{children}</>
  ) : (
    <Navigate to="/signin" />
  );
};
export default PrivateRoute;
