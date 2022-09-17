import axios from "axios";
import { auth } from "../firebase";

export const getTodosList = async () => {
  const response = await axios.get(
    `http://localhost:3000/todos/${auth.currentUser.email}`
  );

  return response.data;
};
