import { useContext } from "react";
import { PadContext } from "../context/PadContext";

export const usePad = () => {
  const padContext = useContext(PadContext);

  if (padContext == undefined) {
    console.error("Pad context is undefined"); // TODO: Make this a real error message readable to the user.
  }

  return padContext;
};
