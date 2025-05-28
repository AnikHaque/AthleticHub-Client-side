import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
      <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-base-content mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-base-content/70 mb-6 max-w-md">
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or return to the homepage.
      </p>
      <Link to="/">
        <button className="btn btn-primary btn-sm">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
