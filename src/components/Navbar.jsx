import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-400">
          TaskFlow AI
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-blue-400">
            Funkcje
          </a>
          <a href="#demo" className="hover:text-blue-400">
            Demo
          </a>
          <a href="#testimonials" className="hover:text-blue-400">
            Opinie
          </a>
          <a href="#pricing" className="hover:text-blue-400">
            Cennik
          </a>
        </div>
        <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
          Zacznij teraz
        </button>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 bg-gray-800 p-4">
          <a href="#features" className="py-2" onClick={() => setIsOpen(false)}>
            Funkcje
          </a>
          <a href="#demo" className="py-2" onClick={() => setIsOpen(false)}>
            Demo
          </a>
          <a
            href="#testimonials"
            className="py-2"
            onClick={() => setIsOpen(false)}
          >
            Opinie
          </a>
          <a href="#pricing" className="py-2" onClick={() => setIsOpen(false)}>
            Cennik
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
