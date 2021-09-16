import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../app.constants";
import Immutable from "immutable";

const initialState = Immutable.fromJS({
  users: {},
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return state.setIn(["users", "loading"], true);
    case FETCH_USERS_SUCCESS:
      return state
        .setIn(["users", "loading"], false)
        .setIn(["users", "list"], action.payload);

    case FETCH_USERS_FAILURE:
      return state
        .setIn(["users", "loading"], false)
        .setIn(["users", "list"], [])
        .setIn(["users", "error"], action.payload);

    default:
      return state;
  }
};

export default usersReducer;
