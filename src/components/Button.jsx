import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
