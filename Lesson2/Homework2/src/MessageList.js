import React, { useState } from 'react';

function MessageList(props) {
    return (
    <div className="messageList">
            {props.messageList.map((text, id) => (
            <div key={id}>{text}</div>
            ))}
        </div>
    )
}

export default MessageList;


