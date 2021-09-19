import { List, Map } from "immutable";
import createSelector from "./reselect";

const getTvShowState = (state) => {
  const { tvShowList } = state;
  return tvShowList || Map();
};

export const getTvShowData = createSelector(getTvShowState, (state) => {
  return state.getIn(["tvShows", "data"]) || List();
});

export const showTvShowLoader = createSelector(getTvShowState, (state) => {
  return state.getIn(["tvShows", "loading"]) || List();
});

export const getTvShowError = createSelector(getTvShowState, (state) => {
  return state.getIn(["tvShows", "error"]) || List();
});
