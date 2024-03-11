import React, { useState } from "react";
import ExpenseList from "./ManageExpenseList";
import Receipt from "./ViewReport";

const ManagerDashboard = () => {
  // Dummy data for recent expenses including employee information
  const recentExpenses = [
    {
      date: "2024-03-01",
      category: "Food",
      amount: "$20",
      employeeId: "12345",
      employeeName: "Alice Smith",
    },
    {
      date: "2024-03-02",
      category: "Transportation",
      amount: "$30",
      employeeId: "54321",
      employeeName: "Bob Johnson",
    },
    {
      date: "2024-03-03",
      category: "Entertainment",
      amount: "$50",
      employeeId: "67890",
      employeeName: "Eve Williams",
    },
    {
      date: "2024-03-04",
      category: "Utilities",
      amount: "$100",
      employeeId: "24680",
      employeeName: "Charlie Brown",
    },
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
    <div className="p-4 h-screen">
      {/* Welcome message */}
      <h1 className="text-3xl font-bold mb-4">Welcome back, {username}!</h1>

      {/* Render ExpenseList component */}
      <ExpenseList expenseList={recentExpenses} showModal={openModal} />

      {/* Modal */}
      {showModal && <Receipt onClose={closeModal} />}
    </div>
  );
};

export default ManagerDashboard;
