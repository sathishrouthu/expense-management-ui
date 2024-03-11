import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-2/3 h-4/5 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Report</h2>
        {/* Iframe to display PDF */}
        <iframe
          title="Receipt PDF"
          //   src="https://www.clickdimensions.com/links/TestPDFfile.pdf"
          src="https://templates.invoicehome.com/receipt-template-us-neat-750px.png"
          className="w-full h-full border-none"
        ></iframe>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
