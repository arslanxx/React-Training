import { List, Map } from "immutable";
import createSelector from "./reselect";

const getDetailViewState = (state) => {
  const { detailData } = state;
  return detailData || Map();
};

export const getDetailData = createSelector(getDetailViewState, (state) => {
  return state.getIn(["detailView", "data"]) || List();
});

export const showDetailLoader = createSelector(getDetailViewState, (state) => {
  return state.getIn(["detailView", "loading"]) || List();
});

export const showReviews = createSelector(getDetailViewState, (state) => {
  return state.getIn(["detailView", "reviews"]) || List();
});

export const getDetailError = createSelector(getDetailViewState, (state) => {
  return state.getIn(["detailView", "error"]) || List();
});
