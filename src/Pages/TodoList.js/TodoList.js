import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { Fragment, useState, useEffect } from "react";

export default function TodoList({ list, handleSingleDelete, updateListing }) {
  const [listing, setListing] = useState(list);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [listIndex, selectedIndex] = useState(0);

  const handleClickOpen = (elem, index) => {
    setOpen(true);
    setSelected(elem);
    selectedIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    selectedIndex(0);
  };

  const handleSelectedChange = (val) => {
    setSelected(val);
  };

  const hanldeSubmit = () => {
    listing[listIndex] = selected;
    updateListing(listing);
    selectedIndex(0);
    setOpen(false);
  };
  useEffect(() => {
    setListing(list);
  }, [list]);

  const renderDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit this website, please enter your text here. We will update it
            immediately.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit Todo"
            value={selected}
            error={selected === "" && true}
            type="email"
            onChange={(e) => handleSelectedChange(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => hanldeSubmit()}
            disabled={selected === ""}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <ul>
      {listing.map((elem, index) => {
        return (
          <Fragment>
            <li
              style={{ display: "list-item" }}
              key={`section-${elem}-${index}-list`}
            >
              <h3 id={`section-${elem}-${index}-name`}>{elem}</h3>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen(elem, index)}
              >
                Edit
              </Button>
              <Button
                type="button"
                id={`section-${elem}-${index}-btn`}
                style={{ marginLeft: "2%" }}
                onClick={() => handleSingleDelete(index)}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </li>
            <div>{renderDialog()}</div>
          </Fragment>
        );
      })}
    </ul>
  );
}
