import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Expense Management System
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Our system helps you to efficiently track and manage your expenses,
          providing a seamless experience for both employees and managers.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-200"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
