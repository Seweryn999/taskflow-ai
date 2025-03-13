import React from "react";
import { useModal } from "./context/useModal";
import Button from "../components/Button";
import taskflowAiImg from "../assets/taskflowai.png";

const Hero = () => {
  const modal = useModal();
  const setRegisterOpen = modal?.setRegisterOpen ?? (() => {});

  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-6 bg-gray-900 text-white">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold leading-tight">
          Zwiększ swoją produktywność z{" "}
          <span className="text-yellow-300">TaskFlow AI</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Inteligentne zarządzanie zadaniami, które automatycznie dostosowuje
          się do Twojego harmonogramu.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Button
            onClick={() => {
              const pricingSection = document.getElementById("pricing");
              pricingSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-blue-600"
          >
            Zobacz cennik
          </Button>

          <Button
            onClick={() => setRegisterOpen(true)}
            className="bg-yellow-300 text-blue-900"
          >
            Zarejestruj się
          </Button>
        </div>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={taskflowAiImg}
          alt="TaskFlow AI"
          className="w-full max-w-lg drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
