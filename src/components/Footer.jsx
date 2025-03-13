import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { name: "Polityka prywatności", href: "#" },
  { name: "Regulamin", href: "#" },
  { name: "Kontakt", href: "#" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-400">
          TaskFlow AI
        </a>

        {/* Linki */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="hover:text-blue-400 text-2xl transition transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} Seweryn Stalinger. Wszelkie prawa
        zastrzeżone.
      </p>
    </footer>
  );
};

export default Footer;
