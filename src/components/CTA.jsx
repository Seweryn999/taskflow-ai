import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold">
          Gotowy, aby{" "}
          <span className="text-yellow-300">zwiększyć produktywność</span>?
        </h2>
        <p className="mt-4 text-lg">
          Dołącz do tysięcy użytkowników i usprawnij zarządzanie swoimi
          zadaniami z TaskFlow AI.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition transform hover:scale-105">
            Zobacz cennik
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
