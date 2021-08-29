import React from 'react';
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        color: "wheat",
        backgroundColor: "white",
      },
    chatListContent: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    title: {
        justifyItems: "center",
        textAlign: "center",
        color: "wheat",
        flex: "0 0 40px",
        lineHeight: "1",
        paddingTop: "15px",
    },

    list: {
        color: "wheat",
        flex: "0 1 auto",
        width: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
    }
}))

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const ChatList = () => {
    const [chatsArray, setChatsArray] = useState([]);
    const classes = useStyles();    
    const [dense, setDense] = useState(false);    
    const [secondary, setSecondary] = useState(false);
    const [count, setCount] = useState(1);

    return (
        <div className={classes.chatListContent}>
          <Typography variant="h6" className={classes.title}>
            Список чатов
          </Typography>
            <List dense={dense} className={classes.list}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Some chat name"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
        </div>
    )
}

export default ChatList;