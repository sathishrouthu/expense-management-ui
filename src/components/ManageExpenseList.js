import React from "react";

const ExpenseList = ({ expenseList, showModal }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Recent Expense Requests</h2>
      <ul className="divide-y divide-gray-200">
        {expenseList.map((expense, index) => (
          <li key={index} className="py-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg">{expense.date}</p>
                <p className="text-gray-600">{expense.category}</p>
                <p className="text-gray-600">
                  Submitted by: {expense.employeeId} - {expense.employeeName}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold mr-8">{expense.amount}</p>
                <button className="text-blue-500 mr-4" onClick={showModal}>
                  View Receipt
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
