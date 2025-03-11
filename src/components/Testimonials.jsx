import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anna Kowalska",
    position: "Project Manager",
    review:
      "TaskFlow AI odmieniło moje zarządzanie projektami. Automatyczne przypomnienia i AI pomagają mi lepiej planować pracę!",
    rating: 5,
  },
  {
    name: "Michał Nowak",
    position: "Freelancer",
    review:
      "Dzięki TaskFlow AI mogę lepiej organizować zadania i oszczędzam mnóstwo czasu na planowaniu.",
    rating: 5,
  },
  {
    name: "Karolina Zielińska",
    position: "HR Specialist",
    review:
      "Świetne narzędzie do zarządzania zespołem! Integracja z kalendarzem to prawdziwy game-changer.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Co mówią nasi <span className="text-blue-500">użytkownicy?</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Dołącz do setek zadowolonych klientów korzystających z TaskFlow AI.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <p className="text-gray-700 dark:text-gray-300">
                "{testimonial.review}"
              </p>
              <div className="mt-4 flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
