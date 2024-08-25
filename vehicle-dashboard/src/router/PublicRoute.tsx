/* eslint-disable @typescript-eslint/no-explicit-any */

import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: any) => {
  const authToken = sessionStorage.getItem("Token") as string;
  return authToken === "" || authToken === null ? (
    <>{children}</>
  ) : (
    <>
      {" "}
      <Navigate to="/" />
    </>
  );
};
export default PublicRoute;
