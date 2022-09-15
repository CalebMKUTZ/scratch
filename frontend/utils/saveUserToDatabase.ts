import axios from "axios";

export const saveUserToDatabase = async (email: string) => {
  await axios.post("http://localhost:3000/auth/user", {
    email: email,
  });
};
