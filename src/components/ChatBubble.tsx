import React from "react";
import MessageList from "./MessageList";
import "./chat.css";
import { TypeMessage } from "../App";

interface ChatBubbleProps {
  messages: TypeMessage[];
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ messages }) => {
  return (
    <div className="chat-bubble">
      <MessageList messages={messages} />
    </div>
  );
};

export default ChatBubble;
