import './Message.css';

function Message(props) {
    return (<div className="message">{props.textToShow}</div>);
} 

export default Message;