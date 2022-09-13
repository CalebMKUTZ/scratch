import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    console.error("User context is undefined");
  }

  return userContext;
}