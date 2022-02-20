/* eslint-disable react/jsx-fragments */
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  // Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { Chat, Send } from "@mui/icons-material";
import { chat } from "./data/testData";

// eslint-disable-next-line react/prop-types
export default function ChatDialog({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const messages = chat[id].messages.map((msg, i) => {
    const align = chat[id].members[msg.sender] === "Bob" ? "right" : "left";
    return (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem key={`msg${i}`}>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align={align} primary={msg.content} />
          </Grid>
          <Grid item xs={12}>
            <ListItemText align={align} secondary={msg.timeSent} />
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
              <TextField id="outlined-basic-email" label="Type Something" fullWidth />
            </Grid>
            <Grid item xs={2} align="center">
              <IconButton>
                <Send />
              </IconButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
