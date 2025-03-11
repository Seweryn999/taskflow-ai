import React from "react";

const Demo = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Zobacz <span className="text-blue-500">TaskFlow AI</span> w akcji
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Zobacz, jak TaskFlow AI może zautomatyzować Twoją pracę i zwiększyć
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition">
            Wypróbuj teraz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
