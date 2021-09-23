import { List, Map } from "immutable";
import createSelector from "./reselect";

const getUpCominMoviesState = (state) => {
  const { upComingMoviesList } = state;
  return upComingMoviesList || Map();
};

export const getUpComingMoviesData = createSelector(
  getUpCominMoviesState,
  (state) => {
    return state.getIn(["upComingMovies", "data"]) || List();
  }
);

export const showUpComingMoviesLoader = createSelector(
  getUpCominMoviesState,
  (state) => {
    return state.getIn(["upComingMovies", "loading"]) || List();
  }
);

export const getUpComingMoviesPage = createSelector(
  getUpCominMoviesState,
  (state) => {
    return state.getIn(["upComingMovies", "page"]) || 1;
  }
);

export const getUpComingMoviesError = createSelector(
  getUpCominMoviesState,
  (state) => {
    return state.getIn(["upComingMovies", "error"]) || List();
  }
);
