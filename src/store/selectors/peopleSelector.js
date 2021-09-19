import { List, Map } from "immutable";
import createSelector from "./reselect";

const getPeopleState = (state) => {
  const { peopleList } = state;
  return peopleList || Map();
};

export const getPeopleData = createSelector(getPeopleState, (state) => {
  return state.getIn(["people", "data"]) || List();
});

export const showPeopleLoader = createSelector(getPeopleState, (state) => {
  return state.getIn(["people", "loading"]) || List();
});

export const getPeopleError = createSelector(getPeopleState, (state) => {
  return state.getIn(["people", "error"]) || List();
});
