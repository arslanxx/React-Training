import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersList({ userData, loading, error, fetchUsers }) {
  console.log(userData);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Fragment>
      <div className="listing">
        <div>
          <h3 style={{ color: "#66D9EF" }}>Fetched Data Redux Thunk</h3>
        </div>
        <ul>
          {loading ? (
            <h2>Loading</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            userData.map((person, index) => (
              <li
                id={`fetch-${JSON.stringify(person)}-${index}`}
                style={{ paddingTop: "1rem" }}
              >
                {person.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.users,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
