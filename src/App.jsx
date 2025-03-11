import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16 container mx-auto">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Witamy w TaskFlow AI
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Twoje rozwiązanie do zarządzania projektami z wykorzystaniem
            sztucznej inteligencji.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition">
              Zacznij teraz
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
