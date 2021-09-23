import { List, Map } from "immutable";
import createSelector from "./reselect";

const getTrendingState = (state) => {
  const { trendingList } = state;
  return trendingList || Map();
};

export const getTrendingData = createSelector(getTrendingState, (state) => {
  return state.getIn(["trending", "data"]) || List();
});

export const showTrendingLoader = createSelector(getTrendingState, (state) => {
  return state.getIn(["trending", "loading"]) || List();
});

export const getTrendingPage = createSelector(getTrendingState, (state) => {
  return state.getIn(["trending", "page"]) || 1;
});

export const getTrendingError = createSelector(getTrendingState, (state) => {
  return state.getIn(["trending", "error"]) || List();
});
