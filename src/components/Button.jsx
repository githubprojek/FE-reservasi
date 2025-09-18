// components/Button.jsx (dulunya CustomButton.jsx)
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition duration-300 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
