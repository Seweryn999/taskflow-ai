import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA.JSX";
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <div id="hero">
        <Hero onRegisterClick={() => setRegisterOpen(true)} />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="demo">
        <Demo />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <CTA onRegisterClick={() => setRegisterOpen(true)} />
      <Footer />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
      />
    </div>
  );
}

export default App;
