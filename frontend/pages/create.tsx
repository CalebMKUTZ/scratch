import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import MainGrid from "../components/MainGrid";
import Message from "../components/Message";
import { usePad } from "../hooks/usePad";

const CreatePage = () => {
  const [content, setContent] = useState("");
  const { createPad, error } = usePad();
  const router = useRouter();

  const createNewPad = (contents: string) => {
    createPad(contents);
    router.push("/pads");
  };

  if (error) {
    return <Message text={error} />;
  }

  return (
    <MainGrid>
      <div className="flex flex-col gap-3 mt-5">
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note..."
          type="text"
        />
        <Button color="primary" onClick={() => createNewPad(content)}>
          create note
        </Button>
      </div>
    </MainGrid>
  );
};

export default CreatePage;
