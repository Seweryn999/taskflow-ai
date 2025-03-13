import React from "react";

const Demo = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Zobacz <span className="text-yellow-300">TaskFlow AI</span> w akcji
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Sprawdź, jak TaskFlow AI może zautomatyzować Twoją pracę i zwiększyć
          produktywność.
        </p>

        <div className="mt-10 flex justify-center">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo TaskFlow AI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-8">
          <button
            onClick={scrollToPricing}
            className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Wypróbuj teraz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
