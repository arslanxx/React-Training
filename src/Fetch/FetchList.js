import React, { useState, Fragment, useEffect } from "react";

export default function FetchList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Fragment>
      <div className="listing">
        <div>
          <h3 style={{ color: "#66D9EF" }}>Fetched data using Fetch</h3>
        </div>
        <ul>
          {users.map((person, index) => (
            <li
              id={`fetch-${JSON.stringify(person)}-${index}`}
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
