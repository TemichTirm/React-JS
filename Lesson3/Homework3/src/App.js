import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./App.css";

const CHAT_BOT_NAME = "Chat-bot ROBOT";
const CURRENT_AUTHOR = "Тирмяев Артём";
const BOT_MESSAGE = "✔️ Сообщение успешно отправлено!"
const DELAY_BOT_SEND_MESSAGE = 1500;  // В милисекундах

function App() {
  
  const [messagesArray, setMessagesArray] = useState([]);
  const [chatsArray, setChatsArray] = useState([]);

  useEffect(() => {
      document.getElementsByClassName("messageList")[0].scrollTop = 9999;
  });
  
  const onSendMessage = (inputMessage) => {
    
      setMessagesArray((prev) => [...prev, {
        author: CURRENT_AUTHOR,
        text: inputMessage,
        time: new Date().toLocaleString(),      
      }]);
      
      setTimeout(() => {
        setMessagesArray((prev) => [...prev, {
          author: CHAT_BOT_NAME,
          text: BOT_MESSAGE,
          time: new Date().toLocaleString(),      
        }]);        
      }, DELAY_BOT_SEND_MESSAGE)
  };

  return (
    <div className="mainWrapper">
      <MessageList messagesArray={messagesArray} chatBotName={CHAT_BOT_NAME}></MessageList>
      <MessageInput onSendMessage={onSendMessage}></MessageInput>
    </div>
  );
}

export default App;
