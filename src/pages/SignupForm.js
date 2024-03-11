import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-400 py-10 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-md px-8 py-10 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-center text-3xl font-bold mb-5">Sign Up</h2>
        <div className="mb-4 flex flex-wrap">
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0 mr-2"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0"
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0 mr-2"
            id="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0"
            id="mobileNumber"
            type="tel"
            placeholder="Mobile Number"
          />
        </div>
        
        <div className="mb-4 flex flex-wrap">
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0 mr-2"
            id="city"
            type="text"
            placeholder="City/Location"
          />
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0 mr-2"
            id="password"
            type="password"
            placeholder="Password"
          />
          <input
            className="shadow appearance-none border rounded w-full sm:w-48 md:w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 md:mb-0"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-3 flex justify-between">
          <Link to="/login" className="text-blue-500 hover:text-blue-800">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
