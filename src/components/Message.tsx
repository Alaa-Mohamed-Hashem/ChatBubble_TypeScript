
import React from "react";
import "./chat.css";

interface MessageProps {
  index: number;
  message: {
    type: "text" | "image" | "voice";
    content: string;
    sender: string;
  };
}

const Message: React.FC<MessageProps> = ({ index, message }) => {
  return (
    <div key={index} className={`message ${message.sender}`}>
      <span className="sender">{message.sender}</span>:{" "}
      {message.type === "text" && <span>{message.content}</span>}
      {message.type === "image" && <img src={message.content} alt="img" />}
      {message.type === "voice" && <span>Voice Message</span>}
    </div>
  );
};

export default Message;

