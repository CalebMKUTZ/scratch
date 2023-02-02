import React, { createContext, useRef, useState } from "react";
import { DrawingContextProps, DrawingProviderProps } from "../types";

export const DrawingContext = createContext<DrawingContextProps>(null);

export const DrawingProvider: React.FC<DrawingProviderProps> = ({
  children,
}) => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];

    if (lastLine) {
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const clearBoard = () => {
    setLines([]);
  };

  return (
    <DrawingContext.Provider
      value={{
        lines,
        isDrawing,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        clearBoard,
      }}
    >
      {children}
    </DrawingContext.Provider>
  );
};
