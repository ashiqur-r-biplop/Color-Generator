import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = {email:"a"};
  if (!user) {
    return <Navigate to="/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;
 