import React from "react";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-teal-400 to-blue-500 shadow-md py-2">
      <div className="container mx-auto text-center">
        <h1 className="text-white text-4xl font-extrabold tracking-wide">
          Expense Tracker
        </h1>
        <p className="text-white text-lg mt-1">
          Track and manage your expenses efficiently
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500"></div>
    </header>
  );
};

export default Header;
