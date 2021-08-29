import {useState} from "react";
import "./MessageInput.css"

const MessageInput = ({onSendMessage}) => { 
    const [inputMessage, setInputMessage] = useState('');

    const sendMessageAndClearInput = (e) => {
        const trimmedMessage = inputMessage.trim();
    
        if (trimmedMessage !== "") {
            onSendMessage(trimmedMessage);
            setInputMessage("");
            if (e !== undefined) {
                e.target.parentNode.childNodes[0].focus();
            }
        }
    }

    return (
        <div className="inputWrapper">
            <textarea 
                className="input"
                value={inputMessage}
                onChange={(e) => {
                    setInputMessage(e.target.value);
                    }
                }
                onKeyDown={({ key }) => {
                    if (key === "Enter") {
                        sendMessageAndClearInput();
                    }
                }}
            />
            <button className="sendButton" onClick={sendMessageAndClearInput}>Отправить</button>
        </div>
    )
};

export default MessageInput;