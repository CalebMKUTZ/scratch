import { createContext, useState } from "react";
import { PadContextProps, PadProviderProps } from "../types";
import axios from "axios";
import { auth } from "../firebase";
import { getPadsList } from "../utils/getPadsList";

export const PadContext = createContext<PadContextProps>(null);

export const PadProvider: React.FC<PadProviderProps> = ({ children }) => {
  const [pads, setPads] = useState([]);
  const [singlePad, setSinglePad] = useState();
  const [error, setError] = useState("");

  const fetchPads = async (userEmail: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/pads/${userEmail}`
      );
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
      await axios.post("http://localhost:3000/pad", {
        content: content,
        userEmail: auth.currentUser.email,
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const deletePad = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/pad/${id}`);
      const newList = await getPadsList();
      setPads(newList);
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
