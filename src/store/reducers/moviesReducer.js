import { fromJS } from "immutable";
import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../constants";

const moviesReducer = (state = fromJS({ movies: {} }), action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return state.setIn(["movies", "loading"], true);
    case FETCH_MOVIE_SUCCESS:
      return state
        .setIn(["movies", "loading"], false)
        .setIn(["movies", "data"], action.payload);
    case FETCH_MOVIE_FAILURE:
      return state
        .setIn(["movies", "loading"], false)
        .setIn(["movies", "error"], action.payload);
    default:
      return state;
  }
};

export default moviesReducer;
