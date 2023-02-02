import { useContext } from "react"
import { DrawingContext } from "../context/DrawingContext"

export const useDraw = () => {
  return useContext(DrawingContext);
}