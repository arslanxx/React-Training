import { Button } from "@material-ui/core";
import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    listing: [],
  };
  componentDidMount() {
    this.setState({ listing: this.props.list });
  }
  render() {
    const { listing } = this.state;
    return (
      <ul>
        {listing.map((elem, index) => {
          return (
            <Fragment>
              <li
                style={{ display: "list-item" }}
                id={`section-${elem}-${index}`}
              >
                <h3>{elem}</h3>
                <Button
                  type="button"
                  onClick={(e) => this.props.handleSingleDelete(index)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </li>
            </Fragment>
          );
        })}
      </ul>
    );
  }
}
