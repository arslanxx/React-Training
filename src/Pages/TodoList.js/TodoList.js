import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    listing: [],
    selected: "",
    selectedIndex: 0,
    openDialog: false,
  };
  componentDidMount() {
    this.setState({ listing: this.props.list });
  }

  handleClickOpen = (elem, index) => {
    this.setState({
      ...this.state,
      openDialog: true,
      selected: elem,
      selectedIndex: index,
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      openDialog: false,
      selectedIndex: 0,
    });
  };

  handleSelectedChange = (val) => {
    this.setState({
      ...this.state,
      selected: val,
    });
  };

  hanldeSubmit = () => {
    const { selectedIndex, selected } = this.state;
    this.state.listing[selectedIndex] = selected;
    this.props.updateListing(this.state.listing);
    this.setState({
      ...this.state,
      selectedIndex: 0,
      openDialog: false,
    });
  };
  renderDialog = () => {
    const { openDialog, selected } = this.state;
    return (
      <Dialog
        open={openDialog}
        onClose={this.handleClose}
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
            onChange={(e) => this.handleSelectedChange(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => this.hanldeSubmit()}
            disabled={selected === ""}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  render() {
    const { listing } = this.state;
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
                  onClick={() => this.handleClickOpen(elem, index)}
                >
                  Edit
                </Button>
                <Button
                  type="button"
                  id={`section-${elem}-${index}-btn`}
                  style={{ marginLeft: "2%" }}
                  onClick={() => this.props.handleSingleDelete(index)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </li>
              <div>{this.renderDialog()}</div>
            </Fragment>
          );
        })}
      </ul>
    );
  }
}
