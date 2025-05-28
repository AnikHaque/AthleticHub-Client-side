import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user, token }) => {
  if (!user || !token) {
    // Redirect to login if no token or user
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
