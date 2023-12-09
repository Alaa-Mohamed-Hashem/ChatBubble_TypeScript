import { useState, ChangeEvent } from "react";
import "./messageInput.css";
import { TypeMessage } from "../App";

type MessageInputProps = {
  currentUser: string;
  onSendMessage: (message: TypeMessage) => void;
};

const MessageInput: React.FC<MessageInputProps> = ({ currentUser, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = (type: "text" | "image" | "voice") => {
    if (newMessage.trim() !== "") {
      onSendMessage({
        type,
        content: newMessage,
        sender: currentUser,
      });
      setNewMessage("");
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
      />
      <button onClick={() => handleSendMessage("text")}>Send Text</button>
      <button onClick={() => handleSendMessage("image")}>Send Image</button>
      <button onClick={() => handleSendMessage("voice")}>Send Voice</button>
    </div>
  );
};

export default MessageInput;
