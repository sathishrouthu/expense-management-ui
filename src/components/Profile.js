import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const user = {
    employeeName: "John Doe",
    designation: "Software Engineer",
    dateOfBirth: "1990-01-01",
    dateOfJoining: "2015-01-01",
    mobileNumber: "123-456-7890",
    email: "john.doe@example.com",
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faUser}
            className="w-12 h-12 text-gray-600 mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.employeeName}</h2>
            <p className="text-gray-600">{user.designation}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 font-medium">Date of Birth</p>
            <p className="text-gray-600">{user.dateOfBirth}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Date of Joining</p>
            <p className="text-gray-600">{user.dateOfJoining}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Mobile Number</p>
            <p className="text-gray-600">{user.mobileNumber}</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
