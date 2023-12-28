import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Footer from "../Components/Footer";
const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
