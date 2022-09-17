import axios from "axios";
import { createContext, useState } from "react";
import { auth } from "../firebase";
import { TodoContextProps, TodoProviderProps } from "../types";
import { getTodosList } from "../utils/getTodosList";

export const TodoContext = createContext<TodoContextProps>(null);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState();
  const [error, setError] = useState("");

  const fetchTodos = async (userEmail: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/todos/${userEmail}`
      );
      setTodos(response.data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const fetchSingleTodo = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/todo/${id}`);
      setSingleTodo(response.data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const createTodo = async (name: string) => {
    try {
      await axios.post("http://localhost:3000/todo", {
        name: name,
        userEmail: auth.currentUser.email,
        isChecked: false,
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      const newList = await getTodosList();
      setTodos(newList);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        singleTodo,
        error,
        fetchTodos,
        fetchSingleTodo,
        createTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
