import React from "react";
import { Layer, Stage, Line } from "react-konva";
import { useDraw } from "../hooks/useDraw";
import Button from "./Button";
import MainGrid from "./MainGrid";

const DrawingComponent = () => {
  const { lines, handleMouseDown, handleMouseMove, handleMouseUp, clearBoard } =
    useDraw();

  return (
    <MainGrid>
      <div className="flex m-auto flex-col mt-5 w-[1000px] height-[1000px] shadow-md bg-white">
        <Stage
          width={1900}
          height={500}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          className="mt-5"
        >
          <Layer>
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke="#df4b26"
                strokeWidth={2}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation={
                  line.tool === "eraser" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
        <div className="mt-6">
          <Button color="primary" fullWidth onClick={clearBoard}>
            clear board
          </Button>
        </div>
      </div>
    </MainGrid>
  );
};

export default DrawingComponent;
