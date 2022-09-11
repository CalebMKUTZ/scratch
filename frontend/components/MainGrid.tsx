import React from "react";
import SideNavigator from "./SideNavigator/SideNavigator";

interface MainGridProps {
  children: React.ReactNode;
}

const MainGrid: React.FC<MainGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-main gap-3">
      <SideNavigator />
      <div className="grid grid-cols-4 gap-3 mt-3">
        {children}
      </div>
    </div>
  );
};

export default MainGrid;
