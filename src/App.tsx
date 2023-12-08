// App.tsx

import React from "react";
import ChatComponent from "./components/ChatComponent";

const App: React.FC = () => {
  return (
    <div>
      <ChatComponent initialSender="Default Name" />
    </div>
  );
};

export default App;
