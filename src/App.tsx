import React, { useState } from "react";
import ChatBubble from "./components/ChatBubble";
import MessageInput from "./components/MessageInput";

export interface TypeMessage {
  type: "text" | "image" | "voice";
  content: string;
  sender: string;
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<TypeMessage[]>([]);
  const [currentUser, setCurrentUser] = useState<string>("Messi");

  const handleSendMessage = (message: TypeMessage) => {
    setMessages([...messages, message]);
    setCurrentUser(prevUser => (prevUser === "Messi" ? "CR7" : "Messi"));
  };

  return (
    <>
      <ChatBubble messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} currentUser={currentUser} />
    </>
  );
};

export default App;
