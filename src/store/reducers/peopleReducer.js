import { fromJS } from "immutable";
import {
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_REQUEST,
} from "../constants";

const peopleReducer = (state = fromJS({ people: {} }), action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return state.setIn(["people", "loading"], true);
    case FETCH_PEOPLE_SUCCESS:
      return state
        .setIn(["people", "loading"], false)
        .setIn(["people", "data"], action.payload);
    case FETCH_PEOPLE_FAILURE:
      return state
        .setIn(["people", "loading"], false)
        .setIn(["people", "error"], action.payload);
    default:
      return state;
  }
};

export default peopleReducer;
