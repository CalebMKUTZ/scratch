import React from "react";
import { buttonAnimations } from "../animations";
import { ButtonProps } from "../types";
import { motion } from "framer-motion";

const Button: React.FC<ButtonProps> = ({
  color,
  onClick,
  fullWidth,
  children,
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{scale: 1.3}}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <div
        className={`${
          buttonAnimations.button__bounce
        } font-bold text-sm p-3 text-center cursor-pointer rounded ${
          fullWidth ? "w-full" : "w-[100px]"
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
    </motion.a>
  );
};

export default Button;
