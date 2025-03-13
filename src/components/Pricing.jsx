import React from "react";
import { useNavigate } from "react-router-dom";
import pricingData from "../data/pricing.json";

const Pricing = () => {
  const navigate = useNavigate();

  const handleClick = (action) => {
    if (action.startsWith("http")) {
      window.location.href = action;
    } else {
      navigate(action);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Wybierz najlepszy <span className="text-yellow-300">plan</span> dla
          siebie
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Elastyczne opcje dla freelancerów, zespołów i dużych firm.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border-2 ${plan.color} rounded-lg shadow-lg`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-xl font-semibold mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleClick(plan.action)}
                className="mt-6 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 bg-white text-gray-900 hover:bg-gray-300"
              >
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
