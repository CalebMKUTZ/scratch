import React from "react";
import { MessageProps } from "../types";

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className="w-full p-3 bg-gray-200 border border-gray-300 rounded">
      {text}
    </div>
  );
};

export default Message;
