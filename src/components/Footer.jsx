import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-400">
          TaskFlow AI
        </a>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-blue-400">
              Polityka prywatności
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Regulamin
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Kontakt
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-400 text-2xl transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 text-2xl transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 text-2xl transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} TaskFlow AI. Wszelkie prawa zastrzeżone.
      </p>
    </footer>
  );
};

export default Footer;
