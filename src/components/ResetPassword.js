import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ResetPassword = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy error message for demonstration
    setErrorMessage("An error occurred.");

    // Dummy success message for demonstration
    setSuccessMessage("Password changed successfully.");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-8 rounded-lg w-1/3 h-4/5 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        {(errorMessage || successMessage) && (
          <div
            className={`mb-3 flex items-center justify-center text-${
              errorMessage ? "red" : "blue"
            }-500`}
          >
            <span className="mr-2">
              <FontAwesomeIcon
                icon={errorMessage ? faExclamationCircle : faCheckCircle}
              />
            </span>
            {errorMessage || successMessage}
          </div>
        )}
        <div>
          <button
            className="bg-yellow-500 text-white px-4 py-1 rounded-md mt-4 mr-5"
            onClick={handleSubmit}
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-1 rounded-md mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
