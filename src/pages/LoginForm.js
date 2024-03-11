import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";

const LoginForm = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  function handleShowResetPassword() {
    setShowResetPassword((show) => !show);
  }
  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-400 py-10 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-md px-8 py-10 w-96 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-center text-3xl font-bold mb-5">Login</h2>
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
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div className="mt-3 flex justify-between">
          <button
            className="text-blue-500 hover:text-blue-800"
            onClick={handleShowResetPassword}
          >
            Forgot Password ?
          </button>
          <Link to="/signup" className="text-blue-500 hover:text-blue-800">
            Sign up
          </Link>
        </div>
      </div>
      {showResetPassword && <ResetPassword onClose={handleShowResetPassword} />}
    </div>
  );
};

export default LoginForm;
