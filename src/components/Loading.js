import React from "react";

const Loading = ({ message }) => {
  message = "Loading.....";
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900"></div>
      <p className="text-gray-700 text-lg mt-4">{message}</p>
    </div>
  );
};

export default Loading;
