import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button"; // Importujemy nasz nowy komponent przycisku

const navLinks = [
  { name: "Funkcje", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Opinie", href: "#testimonials" },
  { name: "Cennik", href: "#pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-400">
          TaskFlow AI
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
              className="hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Przyciski */}
        <div className="hidden md:block">
          <Button
            onClick={() => navigate("/register")}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Zacznij teraz
          </Button>
        </div>

        {/* Mobilne menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Otwórz menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobilne rozwijane menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 bg-gray-800 p-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="py-2 hover:text-blue-400"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => handleNavigation("/register")}
            className="mt-2 bg-blue-500 hover:bg-blue-600"
          >
            Zacznij teraz
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
