import React from "react";
import ChatbotIcon from "./components/Chatboticon";

const App =() => {
  return(
  <div className="container">
    <div className="chatbot-popup">
      {/* Chatbot Header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">▼</button>
      </div>
           {/* Chatbot Header */}
    </div>
      </div>
  )
}
export default App