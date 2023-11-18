import React, { useEffect } from "react";


import { useState } from "react";

import "../../index.scss";

import {
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Grid,
  Button,
} from "@mui/material";

import { useEventContext } from "@/contexts/event-context";

export default function UpdateEventForm() {
  const { handleClose, selectedEvent, editEvent } = useEventContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const submit = async () => {
    try {
      const res = await editEvent({
        title,
        description,
        start,
        end,
        _id: "",
        bgColor: "",
        hours: 0,
      });
      console.log(res);
    } catch (e) {
      alert(e);
    }
  };


  useEffect(() => {
    if (selectedEvent?.title && selectedEvent.description) {
      setTitle(selectedEvent.title);
      setDesc(selectedEvent.description);
      setStart(selectedEvent.start);
      setEnd(selectedEvent.end);
    }
  }, [selectedEvent]);

  return (
    <div>
      <DialogTitle>Update Event</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This modal shows the event details..
        </DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Description"
              placeholder="Enter event description"
              multiline
              rows={2}
              maxRows={3}
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <div className="container">
              <div className="material-textfield">
                <input
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  type="datetime-local"
                />
                <label>Start</label>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="container">
              <div className="material-textfield">
                <input
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  type="datetime-local"
                />
                <label>End</label>
              </div>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submit}>Update</Button>
      </DialogActions>
    </div>
  );
}
