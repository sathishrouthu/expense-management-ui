import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const AddExpense = () => {
  const [formData, setFormData] = useState({
    expenseCategory: "",
    reportDate: "",
    expenseReceipt: null,
    amount: "",
    remarks: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      expenseReceipt: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy error message for demonstration
    // setErrorMessage("An error occurred. Please try again.");

    // Dummy success message for demonstration
    setSuccessMessage("Expense submitted successfully.");

    // Derive additional fields
    const submissionDate = new Date().toISOString();
    const employeeId = "dummy_employee_id";
    const managerId = "dummy_manager_id";

    // Prepare form data to be submitted
    const formDataToSubmit = {
      ...formData,
      submissionDate,
      employeeId,
      managerId,
    };

    // Handle form submission logic here
    console.log("Form submitted!", formDataToSubmit);
  };

  const handleReset = () => {
    setFormData({
      expenseCategory: "",
      reportDate: "",
      expenseReceipt: null,
      amount: "",
      remarks: "",
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-3 border border-gray-300 rounded-md bg-gray-200 h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="expenseCategory"
              className="block text-sm font-medium text-gray-700"
            >
              Expense Category
            </label>
            <select
              id="expenseCategory"
              name="expenseCategory"
              value={formData.expenseCategory}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white rounded-md p-2"
            >
              <option value="">Select Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="reportDate"
              className="block text-sm font-medium text-gray-700"
            >
              Report Date
            </label>
            <input
              type="date"
              id="reportDate"
              name="reportDate"
              value={formData.reportDate}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white rounded-md p-2"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="expenseReceipt"
            className="block text-sm font-medium text-gray-700"
          >
            Expense Receipt (PDF/JPG/PNG/JPEG)
          </label>
          <input
            type="file"
            id="expenseReceipt"
            name="expenseReceipt"
            accept=".pdf,.jpg,.png,.jpeg"
            onChange={handleFileChange}
            className="mt-1 block w-full bg-white rounded-md p-2"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="mt-1 block w-full bg-white rounded-md p-2"
            step="0.01" // Allow decimal values
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="remarks"
            className="block text-sm font-medium text-gray-700"
          >
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            className="mt-1 block w-full bg-white rounded-md p-2"
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
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-1 px-4 rounded-md mr-2 hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-800 py-1 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
