import React from "react";

interface NavigatorOptionProps {
  name: string;
  onNavigate?: () => any;
}

const NavigatorOption: React.FC<NavigatorOptionProps> = ({
  name,
  onNavigate,
}) => {
  return (
    <div
      className="p-2 rounded hover:bg-gray-900"
      onClick={onNavigate}
    >
      <h1 className="font-bold text-white">{name}</h1>
    </div>
  );
};

export default NavigatorOption;
