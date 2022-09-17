import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MainGrid from "../components/MainGrid";
import { useTodo } from "../hooks/useTodo";

const CreateTodoPage = () => {
  const [name, setName] = useState("");
  const { createTodo } = useTodo();
  const router = useRouter();

  const createNewTodo = (name: string) => {
    createTodo(name);
    router.push("/todos");
  };

  return (
    <MainGrid>
      <div className="flex flex-col gap-3 mt-5">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Todo name..."
          type="text"
        />
        <Button color="primary" onClick={() => createNewTodo(name)}>
          add
        </Button>
      </div>
    </MainGrid>
  );
};

export default CreateTodoPage;
