/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onRegisterClick }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold leading-tight">
          Zwiększ swoją produktywność z{" "}
          <span className="text-yellow-300">TaskFlow AI</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Inteligentne zarządzanie zadaniami, które automatycznie dostosowuje
          się do Twojego harmonogramu.
        </p>

       
        <div className="mt-6 flex justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              document
                .getElementById("pricing")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            Zobacz cennik
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onRegisterClick}
            className="ml-4 bg-yellow-300 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold transition transform"
          >
            Zarejestruj się
          </motion.button>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
      >
        <img
          src="/src/public/taskflowai.png"
          alt="TaskFlow AI"
          className="w-full max-w-lg drop-shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
