import React, { useState } from "react";
import Receipt from "./ViewReport";

const EmployeeDashboard = () => {
  // Dummy data for recent expenses
  const recentExpenses = [
    { date: "2024-03-01", category: "Food", amount: "$20" },
    { date: "2024-03-02", category: "Transportation", amount: "$30" },
    { date: "2024-03-03", category: "Entertainment", amount: "$50" },
    { date: "2024-03-04", category: "Utilities", amount: "$100" },
  ];

  // Dummy username
  const username = "John Doe";

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      {/* Welcome message */}
      <h1 className="text-3xl font-bold mb-4">Welcome back, {username}!</h1>

      {/* Recent Expenses */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Recent Expenses</h2>
        <ul className="divide-y divide-gray-200">
          {recentExpenses.map((expense, index) => (
            <li key={index} className="py-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg">{expense.date}</p>
                  <p className="text-gray-600">{expense.category}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold mr-8">{expense.amount}</p>
                  <button onClick={openModal} className="text-blue-500 mr-4">
                    View Receipt
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Expense
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
            View Reports
          </button>
          {/* Add more quick actions here */}
        </div>
      </div>

      {/* Modal */}
      {showModal && <Receipt onClose={closeModal} />}
    </div>
  );
};

export default EmployeeDashboard;
