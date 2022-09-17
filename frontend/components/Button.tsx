import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
  color,
  onClick,
  fullWidth,
  children,
}) => {
  return (
    <div
      className={`font-bold text-sm p-3 text-center cursor-pointer rounded ${
        fullWidth ? "w-full" : "w-[150px]"
      } ${
        color === "primary"
          ? "bg-blue-400 hover:bg-blue-500"
          : color === "blacked"
          ? "bg-gray-800 hover:bg-gray-900 text-gray-200"
          : color === "default"
          ? "bg-white border border-gray-200 hover:bg-gray-100"
          : null
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
