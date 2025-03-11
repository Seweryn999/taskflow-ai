import React from "react";
import { FaTasks, FaClock, FaChartLine, FaBrain } from "react-icons/fa";

const features = [
  {
    icon: <FaTasks className="text-blue-500 text-5xl" />,
    title: "Automatyczne Zarządzanie Zadaniami",
    description:
      "TaskFlow AI priorytetyzuje i organizuje Twoje zadania automatycznie.",
  },
  {
    icon: <FaClock className="text-blue-500 text-5xl" />,
    title: "Optymalizacja Czasu",
    description:
      "AI analizuje Twój harmonogram i proponuje najlepsze terminy wykonania.",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-5xl" />,
    title: "Śledzenie Postępów",
    description:
      "Zaawansowane statystyki i wizualizacje pomagają lepiej zarządzać pracą.",
  },
  {
    icon: <FaBrain className="text-blue-500 text-5xl" />,
    title: "Integracja z AI",
    description:
      "TaskFlow AI uczy się Twoich nawyków i dostosowuje się do Twojego stylu pracy.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Co potrafi <span className="text-blue-500">TaskFlow AI?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Odkryj inteligentne funkcje, które ułatwią Ci życie.
        </p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
