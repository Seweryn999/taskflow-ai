import React from "react";
import { FaStar } from "react-icons/fa";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold">
          Co mówią nasi <span className="text-blue-500">użytkownicy?</span>
        </h2>
        <p className="mt-4 text-lg opacity-90">
          Dołącz do setek zadowolonych klientów korzystających z TaskFlow AI.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="opacity-90">"{testimonial.review}"</p>
              <div className="mt-4 flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
              <p className="opacity-80">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
