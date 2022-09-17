import axios from "axios";
import { auth } from "../firebase";

export const getPadsList = async () => {
  const response = await axios.get(
    `http://localhost:3000/pads/${auth.currentUser.email}`
  );

  return response.data;
};
