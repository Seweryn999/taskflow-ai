import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Zarejestruj się</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg w-80">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />
        <label className="block mb-2">Hasło</label>
        <input
          type="password"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700">
          Zarejestruj się
        </button>
      </form>
      <button onClick={() => navigate("/")} className="mt-4 text-blue-600">
        Wróć do strony głównej
      </button>
    </div>
  );
};

export default RegisterPage;
