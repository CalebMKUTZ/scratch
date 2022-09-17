import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (todoContext === undefined) {
    console.error("Todo Context is undefined");
  }

  return todoContext;
}