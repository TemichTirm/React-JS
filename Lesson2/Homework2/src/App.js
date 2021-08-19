import React, { useState } from "react";
import MessageList from "./MessageList";
import "./App.css";

function App() {
  const [inputMessage, setInputMessage] = useState({id: 0, author: "", text:"", time: Date.now});
  //const [messagesArray, setMessagesArray] = useState([]);
  const [messageList, setMessageList] = useState([{id: 0, author: "", text:"", time: Date.now}]);

  const onSendMessage = () => {
    setMessageList((prev) => [...prev, inputMessage]);
    setInputMessage({});
  };

  return (
    <div className="mainWrapper">
      <MessageList messageList={messageList}></MessageList>

      <div className="inputWrapper">
        <input
          className="input"
          value={inputMessage.text}
          onChange={(e) => {setInputMessage({
            id: messageList[messageList.length-1].id + 1,
            author: "Me",
            text: e.target.value,
            time: Date.now
            })}
          }
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              console.log("Enter");
              onSendMessage();
            }
          }}
        />
        <button onClick={onSendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
