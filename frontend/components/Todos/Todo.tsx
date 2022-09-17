import React, { useState } from "react";
import { TodoProps } from "../../types";
import { BsCircle, BsCircleFill, BsDashCircleFill } from "react-icons/bs";
import { useTodo } from "../../hooks/useTodo";

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTodo } = useTodo();

  const checkTodo = () => {
    todo.isChecked = true;
    setIsChecked(todo.isChecked);
  };

  return (
    <div className="flex flex-row justify-between items-center shadow-md rounded w-full bg-white p-3">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={checkTodo}
          className={
            isChecked
              ? "cursor-pointer font-bold text-gray-400 line-through"
              : "font-bold cursor-pointer"
          }
        >
          {todo.name}
        </div>
      </div>
      <BsDashCircleFill fontSize="30px" onClick={() => deleteTodo(todo?.id)} />
    </div>
  );
};

export default Todo;
