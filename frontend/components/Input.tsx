import React from "react";
import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <input
      className="p-3 rounded w-full border border-gray-200 focus:border border-blue-300"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
