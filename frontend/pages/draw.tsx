import dynamic from "next/dynamic";
import React from "react";

const DrawingComponent = dynamic(
  () => import("../components/DrawingComponent"),
  {
    ssr: false,
  }
);

const Draw = () => {
  return <DrawingComponent />;
};

export default Draw;
