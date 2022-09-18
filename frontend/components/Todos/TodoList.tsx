import React, { useEffect, useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { useUser } from "../../hooks/useUser";
import Button from "../Button";
import Input from "../Input";
import Message from "../Message";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, fetchTodos, error } = useTodo();
  const { user } = useUser();

  useEffect(() => {
    if (user !== undefined) {
      fetchTodos(user.email);
    }
  }, []);

  if (error) {
    return <Message text={error} />;
  }

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo?.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
