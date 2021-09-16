import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsersRequest } from "../../store/user/userActions";
import {
  getUserData,
  getLoadingStatus,
  getError,
} from "../../store/selectors/userSelector";

function UsersList({ userData, loading, error, usersReq }) {
  useEffect(() => {
    usersReq();
  }, []);
  return (
    <Fragment>
      <div className="listing">
        <div>
          <h3 style={{ color: "#66D9EF" }}>
            Fetched Data using Redux Saga and Immutable.js
          </h3>
        </div>
        <ul>
          {loading ? (
            <h2>Loading</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            userData &&
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
    userData: getUserData(state),
    loading: getLoadingStatus(state),
    error: getError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersReq: () => dispatch(fetchUsersRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
