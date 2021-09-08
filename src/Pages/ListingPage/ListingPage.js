import React, { Component, Fragment } from "react";
import Header from "../../Components/Header/Header";
import NotFound from "../../Components/NotFound/NotFound";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ListingPage.css";
import { getObjLS, setObjLS } from "../../Components/Helper/Helper";
import TodoList from "../TodoList.js/TodoList";

export default class ListingPage extends Component {
  state = {
    newToDo: "",
    taskList: [],
  };
  componentDidMount() {
    getObjLS("taskList") &&
      this.setState({
        ...this.state,
        taskList: getObjLS("taskList").split(","),
      });
  }

  onSubmit = () => {
    this.state.taskList.push(this.state.newToDo);
    setObjLS("taskList", this.state.taskList);
    this.setState({
      newToDo: "",
      taskList: this.state.taskList,
    });
  };

  handleText = (value) => {
    this.setState({ newToDo: value });
  };

  handleSingleDelete = (i) => {
    this.state.taskList.splice(i, 1);
    setObjLS("taskList", this.state.taskList);
    this.setState({
      ...this.state,
      taskList: this.state.taskList,
    });
  };

  handleDeleteAll = (i) => {
    this.state.taskList = [];
    setObjLS("taskList", this.state.taskList);
    this.setState({
      ...this.state,
      taskList: this.state.taskList,
    });
  };
  render() {
    return (
      <Fragment>
        <Header />
        <div className="todo_row">
          <div className="todo_form">
            <TextField
              id="standard-basic"
              placeholder="Todo Name"
              autoFocus={true}
              label="Todo Name"
              onChange={(e) => {
                this.handleText(e.target.value);
              }}
              value={this.state.newToDo}
              error={this.state.newToDo === "" && true}
            />
            <Button
              type="button"
              onClick={(e) => this.onSubmit(e)}
              disabled={this.state.newToDo === ""}
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </div>
        </div>
        {this.state.taskList.length > 0 ? (
          <Fragment>
            <div className="listing_clear">
              <h1>Listing</h1>
              <Button
                type="button"
                onClick={() => this.handleDeleteAll()}
                variant="contained"
                color="secondary"
              >
                Clear All
              </Button>
            </div>
            <TodoList
              list={this.state.taskList}
              handleSingleDelete={this.handleSingleDelete}
            />
          </Fragment>
        ) : (
          <div className="no_data">
            <NotFound />
          </div>
        )}
      </Fragment>
    );
  }
}
