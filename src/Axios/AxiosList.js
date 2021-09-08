import React, { Fragment } from "react";
import axios from "axios";

export default class AxiosList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  async fetchUsersList() {
    let users = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    this.setState({ persons: users.data });
  }
  render() {
    return (
      <Fragment>
        <div className="listing">
          <div>
            <h3 style={{ color: "#66D9EF" }}>Fetched data using Axios</h3>
          </div>
          <ul>
            {this.state.persons.map((person, index) => (
              <li
                id={`axios-${JSON.stringify(person)}-${index}`}
                style={{ paddingTop: "1rem" }}
              >
                {person.name}
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}
