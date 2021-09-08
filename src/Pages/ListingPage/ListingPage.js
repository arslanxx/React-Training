import React, { Component, Fragment } from "react";
import Header from "../../Components/Header/Header";

export default class ListingPage extends Component {
  state = {
    newToDo: "",
    taskList: [],
  };
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <h1>Yolo</h1>
        </div>
      </Fragment>
    );
  }
}
