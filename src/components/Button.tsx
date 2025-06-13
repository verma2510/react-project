import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium rounded-lg text-sm px-5 py-2.5">
      {label}
    </button>
  );
};

export default Button;