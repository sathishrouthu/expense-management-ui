import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const AccessDeniedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="text-red-500 text-4xl mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="text-lg mb-8">
        You do not have permission to access this page.
      </p>
      <Link to="/home" className="text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default AccessDeniedPage;
