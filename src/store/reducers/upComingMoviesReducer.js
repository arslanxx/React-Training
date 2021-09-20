import { fromJS } from "immutable";
import {
  FETCH_UPCOMINGMOVIES_REQUEST,
  FETCH_UPCOMINGMOVIES_SUCCESS,
  FETCH_UPCOMINGMOVIES_FAILURE,
} from "../constants";

const upComingMoviesReducer = (
  state = fromJS({ upComingMovies: {} }),
  action
) => {
  switch (action.type) {
    case FETCH_UPCOMINGMOVIES_REQUEST:
      return state.setIn(["upComingMovies", "loading"], true);
    case FETCH_UPCOMINGMOVIES_SUCCESS:
      return state
        .setIn(["upComingMovies", "loading"], false)
        .setIn(["upComingMovies", "data"], action.payload);
    case FETCH_UPCOMINGMOVIES_FAILURE:
      return state
        .setIn(["upComingMovies", "loading"], false)
        .setIn(["upComingMovies", "error"], action.payload);
    default:
      return state;
  }
};

export default upComingMoviesReducer;
