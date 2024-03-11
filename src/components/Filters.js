import React, { useState } from "react";

const Filters = ({ categories, employees, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setSelectedValue(""); // Reset selected value when filter changes
    onFilterChange({
      filter: event.target.value,
      value: "",
    });
  };

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
    onFilterChange({
      filter: selectedFilter,
      value: event.target.value,
    });
  };

  return (
    <div className="flex items-center space-x-4 h-screen">
      <label htmlFor="filterBy" className="font-semibold">
        Filter By:
      </label>
      <select
        id="filterBy"
        value={selectedFilter}
        onChange={handleFilterChange}
        className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Select</option>
        <option value="Category">Category</option>
        <option value="EmployeeId">Employee ID</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
      </select>

      {selectedFilter === "Category" && (
        <select
          value={selectedValue}
          onChange={handleValueChange}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}

      {selectedFilter === "EmployeeId" && (
        <select
          value={selectedValue}
          onChange={handleValueChange}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          {employees.map((employee) => (
            <option key={employee.employeeId} value={employee.employeeId}>
              {employee.employeeName}
            </option>
          ))}
        </select>
      )}

      {selectedFilter === "Month" && (
        <select
          value={selectedValue}
          onChange={handleValueChange}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          {/* Add more months as needed */}
        </select>
      )}

      {selectedFilter === "Year" && (
        <input
          type="number"
          value={selectedValue}
          onChange={handleValueChange}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default Filters;
