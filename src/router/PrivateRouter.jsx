import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const PrivateRouter = () => {
  const { user } = useContext(AuthContext);

  return user.email ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
