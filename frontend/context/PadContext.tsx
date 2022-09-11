import { createContext, useState } from "react";
import { PadContextProps, PadProviderProps } from "../types";
import axios from "axios";

export const PadContext = createContext<PadContextProps>(null);

export const PadProvider: React.FC<PadProviderProps> = ({ children }) => {
  const [pads, setPads] = useState([]);
  const [singlePad, setSinglePad] = useState();
  const [error, setError] = useState("");

  const fetchPads = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pads");
      setPads(response.data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const fetchSinglePad = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/pad/${id}`);
      setSinglePad(response.data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const createPad = async (content: string) => {
    try {
      const result = await axios.post("http://localhost:3000/pad", {
        content: content,
      });

      if (result.status == 204) {
        setError("could not create pad");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const deletePad = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/pad/${id}`);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <PadContext.Provider
      value={{
        pads,
        singlePad,
        error,
        fetchPads,
        fetchSinglePad,
        createPad,
        deletePad,
      }}
    >
      {children}
    </PadContext.Provider>
  );
};
