import React from "react";
import Chatboticon from "./Components/ChatbotIcon";
const App = () => {
    return (
        <div className="container">
           <div className="chatbot-Fixup">
            {/* Chatbot Header */}
            <div className="chat-header">
               <div className="header-info">
               <Chatboticon />
               <h2 className="logo-text">Chatbot</h2> 
               </div> 
               <button
                className="material-symbols-rounded">keyboard_arrow_down</button>


  {/* Chatbot Body */}
<div className= "Chat-body">
    <div className="message bot-message"></div>
    <Chatboticon />
    <p className="message-text">
        Hello there👋🏻 <br /> How can I help you today?
    </p>
     </div>
     <div className="message user-message"></div>
    <p className="message-text">User Inputs.
        </p>
     </div>
               </div>

                   {/* Chatbot Footer */} 
               <div className="chatfooter">
                <form action="" className="chat form">
                   <input type="text" placeholder="Message...." className="message input" required /> 
                   <button
                className="material-symbols-rounded">keyboard_arrow_down</button>
                </form>
                 </div>
                </div> 
        
    )
}
export default App