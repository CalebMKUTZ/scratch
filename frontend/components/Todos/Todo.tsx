import React, { useState } from "react";
import { TodoProps } from "../../types";
import { BsDashCircleFill } from "react-icons/bs";
import { useTodo } from "../../hooks/useTodo";
import { motion } from "framer-motion";

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { deleteTodo } = useTodo();

  const checkTodo = () => {
    todo.isChecked = true;
    setIsChecked(todo.isChecked);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-row justify-between items-center shadow-md rounded w-full bg-red-300 p-3 h-[50px]">
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
        <BsDashCircleFill
          fontSize="30px"
          onClick={() => deleteTodo(todo?.id)}
        />
      </div>
    </motion.div>
  );
};

export default Todo;
