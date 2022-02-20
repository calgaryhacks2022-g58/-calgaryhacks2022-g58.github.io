/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { Chat, Send } from "@mui/icons-material";
import moment from "moment";
import { db } from "utils/firestore";
import { arrayUnion, updateDoc, doc, Timestamp } from "firebase/firestore";

export default function ChatDialog({ chatId, chatMessages }) {
  const [open, setOpen] = React.useState(false);
  const [msgInput, setMsgInput] = React.useState("");

  const chatRef = doc(db, "Chat", `${chatId}`);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendMsg = async () => {
    await updateDoc(chatRef, {
      messages: arrayUnion({
        sender: 1,
        content: msgInput,
        timeSent: Timestamp.now(),
      }),
    });
    setMsgInput("");
  };

  const messages = chatMessages.map((msg, i) => {
    const align = msg.sender === 1 ? "right" : "left";
    const timeSent = msg.timeSent.toDate();
    const mom = moment(timeSent);

    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem key={`msg${i}`}>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align={align} primary={msg.content} />
          </Grid>
          <Grid item xs={12}>
            <ListItemText align={align} secondary={mom.format("LT")} />
          </Grid>
        </Grid>
      </ListItem>
    );
  });

  return (
    <React.Fragment>
      <IconButton aria-label="chat" onClick={handleClickOpen}>
        <Chat />
      </IconButton>
      <Dialog open={open} onClose={handleClose} keepMounted>
        <DialogTitle>Chat</DialogTitle>
        <DialogContent dividers>
          <List style={{ maxHeight: "50vh", overflow: "auto" }}>{messages}</List>
          <Divider />
          <Grid container>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={2} align="center">
              <IconButton onClick={handleSendMsg}>
                <Send />
              </IconButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
