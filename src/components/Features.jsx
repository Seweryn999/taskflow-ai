import React, { useEffect, useState } from "react";
import { FaTasks, FaClock, FaChartLine, FaBrain } from "react-icons/fa";

const iconComponents = {
  FaTasks: <FaTasks className="text-blue-500 text-5xl" />,
  FaClock: <FaClock className="text-blue-500 text-5xl" />,
  FaChartLine: <FaChartLine className="text-blue-500 text-5xl" />,
  FaBrain: <FaBrain className="text-blue-500 text-5xl" />,
};

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/src/data/features.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Co potrafi <span className="text-blue-400">TaskFlow AI?</span>
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Odkryj inteligentne funkcje, które ułatwią Ci życie.
        </p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="mb-4">{iconComponents[feature.icon]}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
