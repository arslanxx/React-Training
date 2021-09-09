import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import NotFound from "../../Components/NotFound/NotFound";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ListingPage.css";
import { getObjLS, setObjLS } from "../../Components/Helper/Helper";
import TodoList from "../TodoList.js/TodoList";

export default function ListingPage() {
  const [newToDo, setNewToDo] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getObjLS("taskList") && setTaskList(getObjLS("taskList").split(","));
  }, []);
  useEffect(() => {
    setObjLS("taskList", taskList);
  }, [taskList]);

  const onSubmit = () => {
    taskList.push(newToDo);
    setObjLS("taskList", taskList);
    setNewToDo("");
  };

  const handleText = (value) => {
    setNewToDo(value);
  };

  const handleSingleDelete = (i) => {
    taskList.splice(i, 1);
    setTaskList([...taskList]);
  };

  const handleDeleteAll = (i) => {
    setTaskList([]);
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
      {taskList.length > 0 ? (
        <Fragment>
          <div className="listing_clear">
            <h1>Listing</h1>
            <Button
              type="button"
              onClick={() => handleDeleteAll()}
              variant="contained"
              color="secondary"
            >
              Clear All
            </Button>
          </div>
          <TodoList list={taskList} handleSingleDelete={handleSingleDelete} />
        </Fragment>
      ) : (
        <div className="no_data">
          <NotFound />
        </div>
      )}
    </Fragment>
  );
}
