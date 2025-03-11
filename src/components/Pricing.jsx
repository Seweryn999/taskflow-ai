import React from "react";

const plans = [
  {
    name: "Darmowy",
    price: "0 zł / miesiąc",
    features: ["Podstawowe funkcje", "Zarządzanie zadaniami", "1 użytkownik"],
    button: "Zacznij za darmo",
    color: "border-gray-400 bg-gray-200 text-gray-900",
  },
  {
    name: "Pro",
    price: "39 zł / miesiąc",
    features: ["Wszystkie funkcje Darmowe", "Integracja AI", "5 użytkowników"],
    button: "Wybierz Pro",
    color: "border-blue-500 bg-blue-500 text-white",
  },
  {
    name: "Enterprise",
    price: "99 zł / miesiąc",
    features: [
      "Wszystkie funkcje Pro",
      "Zaawansowana analiza",
      "Nieograniczona liczba użytkowników",
    ],
    button: "Skontaktuj się",
    color: "border-yellow-500 bg-yellow-500 text-white",
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Wybierz najlepszy <span className="text-blue-500">plan</span> dla
          siebie
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Elastyczne opcje dla freelancerów, zespołów i dużych firm.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border-2 ${plan.color} rounded-lg shadow-lg`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-xl font-semibold mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
