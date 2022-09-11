import React from "react";
import { MdDraw } from "react-icons/md";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <MdDraw fontSize="30px" className="text-blue-300" />
      <h1 className="font-bold text-2xl text-gray-300">SCRATCH</h1>
    </div>
  );
};

export default Logo;
