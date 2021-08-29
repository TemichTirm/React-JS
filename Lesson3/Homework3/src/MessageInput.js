import {useState} from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./MessageInput.css"

const useStyles = makeStyles((theme) => ({
    button:{
        flex: "0 0 130px"
    },
    input: {
        color: "secondary",
        backgroundColor: "burlywood",
        borderRadius: "5px",
        flex: "1 1 auto",
        padding: "0 5px",
        margin: "0 20px 0 0",
        fontSize: "small",
    },
}))


const MessageInput = ({onSendMessage}) => { 
    const [inputMessage, setInputMessage] = useState('');
    const classes = useStyles();

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
            <TextField 
                multiline
                classes= {{
                    root: classes.input
                }}
                label="Введите сообщение"
                value={inputMessage}
                onChange={(e) => {
                    setInputMessage(e.target.value);
                    }
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendMessageAndClearInput();
                        e.preventDefault();
                    }
                }}
            />
                <Button
                    variant="contained"
                    color="primary"
                    classes= {{
                        root: classes.button
                    }}
                    size="small"
                    endIcon={<SendIcon />}
                    onClick={sendMessageAndClearInput}
                >
                    Отправить
                </Button>
            
        </div>
    )
};

export default MessageInput;