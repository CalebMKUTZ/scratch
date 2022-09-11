import React from "react";

interface SideNavigatorOptionProps {
  name: string;
  onNavigate?: () => any;
}

const SideNavigatorOption: React.FC<SideNavigatorOptionProps> = ({
  name,
  onNavigate,
}) => {
  return (
    <div className="w-full p-3 rounded hover:bg-gray-800" onClick={onNavigate}>
      <h1 className="font-bold text-sm text-white">{name}</h1>
    </div>
  );
};

export default SideNavigatorOption;
