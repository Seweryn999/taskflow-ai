import React from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Zarejestruj się
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Wprowadź swoje dane, aby rozpocząć.
        </p>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full p-2 border rounded-lg"
        />
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full">
          Zarejestruj się
        </button>
        <button
          onClick={onClose}
          className="mt-2 text-gray-500 hover:text-gray-700 w-full"
        >
          Anuluj
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
