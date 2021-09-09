import React, { Fragment, useState } from "react";
import Header from "../../Components/Header/Header";
import NotFound from "../../Components/NotFound/NotFound";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ListingPage.css";
import { connect } from "react-redux";
import TodoList from "../TodoList.js/TodoList";
import {
  createTodo,
  deleteAllTodo,
  deleteTodo,
} from "../../redux/Todo/todoActions";

function ListingPage(props) {
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = () => {
    props.createTodo(newToDo);
    setNewToDo("");
  };

  const handleText = (value) => {
    setNewToDo(value);
  };

  const handleSingleDelete = (i) => {
    props.deleteTodo(i);
  };

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
              handleText(e.target.value);
            }}
            value={newToDo}
            error={newToDo === "" && true}
          />
          <Button
            type="button"
            onClick={(e) => onSubmit(e)}
            disabled={newToDo === ""}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </div>
      </div>
      {props.taskList.length > 0 ? (
        <Fragment>
          <div className="listing_clear">
            <h1>Listing</h1>
            <Button
              type="button"
              onClick={() => props.deleteAllTodo()}
              variant="contained"
              color="secondary"
            >
              Clear All
            </Button>
          </div>
          <TodoList
            list={props.taskList}
            handleSingleDelete={handleSingleDelete}
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
const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (param) => dispatch(createTodo(param)),
    deleteAllTodo: () => dispatch(deleteAllTodo()),
    deleteTodo: (param) => dispatch(deleteTodo(param)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);
