import React from "react";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({ title, content, children }) => {
  return (
    <div className="flex flex-col gap-3 p-6 shadow-md rounded w-[500px] m-auto mt-24 bg-white">
      <h1 className="font-bold text-center text-2xl">{title}</h1>
      <p className="font-light text-gray-400">{content}</p>
      {children}
    </div>
  );
};

export default Card;
