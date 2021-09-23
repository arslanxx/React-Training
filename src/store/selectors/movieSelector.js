import { List, Map } from "immutable";
import createSelector from "./reselect";

const getMoiveState = (state) => {
  const { movieList } = state;
  return movieList || Map();
};

export const getMovieData = createSelector(getMoiveState, (state) => {
  return state.getIn(["movies", "data"]) || List();
});

export const showMovieLoader = createSelector(getMoiveState, (state) => {
  return state.getIn(["movies", "loading"]) || List();
});

export const getMoviesPage = createSelector(getMoiveState, (state) => {
  return state.getIn(["movies", "page"]) || 1;
});

export const getMovieError = createSelector(getMoiveState, (state) => {
  return state.getIn(["movies", "error"]) || List();
});
