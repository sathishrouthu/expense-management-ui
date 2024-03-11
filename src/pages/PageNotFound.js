import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <FontAwesomeIcon
        icon={faExclamationCircle}
        className="text-red-500 text-4xl mb-4"
      />
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-8">
        The page you're looking for does not exist.
      </p>
      <Link to="/home" className="text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
