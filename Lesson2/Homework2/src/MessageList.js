import "./MessageList.css";

function MessageList({messagesArray, chatBotName}) {
    return (
        <div className="messageList"> {
            messagesArray.map((message, i) => {
                const isMessageFromBot = message.author === chatBotName;
                return (
                    <div key={i} className = {isMessageFromBot? "botMessageBlock" : "myMessageBlock"} >
                        <div className = {isMessageFromBot? "botMessageDate" : "myMessageDate"}>{message.time}</div>
                        <div className = {isMessageFromBot? "botMessageInfo" : "myMessageInfo"}>{message.author}</div>
                        <div className = {isMessageFromBot? "botMessage" : "myMessage"}>{message.text}</div>
                    </div>
                )
            })
        }</div>
    )
}

export default MessageList;


