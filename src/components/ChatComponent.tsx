// ChatComponent.tsx

import React, { useState, ChangeEvent } from "react";
import PropTypes from "prop-types";
import "./ChatComponent.css";

interface Message {
  type: string;
  content: string;
  sender: string;
}

interface ChatComponentProps {
  initialSender: string;
}

const ChatComponent: React.FC<ChatComponentProps> = ({ initialSender }) => {
  const [sender, setSender] = useState<string>(initialSender);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<string>("text");

  const handleSendMessage = (): void => {
    if (newMessage.trim() !== "") {
      const newMessageObject: Message = {
        type: messageType,
        content: newMessage,
        sender,
      };

      setMessages([...messages, newMessageObject]);
      setNewMessage("");
    }
  };


  const handleSenderChange = (): void => {
    const newSender = window.prompt("Enter new sender:");

    if (newSender !== null) {
      setSender(newSender);
    } else {
      console.log("User cancelled the prompt.");
    }
  };

  let message_Type: React.ReactNode;

  if (messageType === "text") {
    message_Type = (
      <input
        type="text"
        className="message-input"
        value={newMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewMessage(e.target.value)
        }
        placeholder={`Type a ${messageType} message`}
      />
    );
  } else if (messageType === "image") {
    message_Type = (
      <input
        type="file"
        id="file-input"
        className="message-input"
        value={newMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewMessage(e.target.value)
        }
        placeholder={`Type an ${messageType} message`}
      />
    );
  } else if (messageType === "voice") {
    message_Type = (
      <input
        type="text"
        className="message-input"
        value={newMessage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewMessage(e.target.value)
        }
        placeholder={`Type an ${messageType} message`}
      />
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat ({sender})</h2>
        <button onClick={handleSenderChange}>Change Sender</button>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender}:</strong>{" "}
            {message.type === "text" ? (
              message.content
            ) : message.type === "image" ? (
              <img src={message.content} alt="img" />
            ) : (
              "Voice message"
            )}
          </div>
        ))}
      </div>
      <div className="input-section">
        <select
          className="message-type-select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setMessageType(e.target.value)
          }
          value={messageType}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="voice">Voice</option>
        </select>

        {message_Type}
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

ChatComponent.propTypes = {
  initialSender: PropTypes.string.isRequired,
};

export default ChatComponent;
