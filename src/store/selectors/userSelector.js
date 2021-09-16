import createSelector from "./reselect";

export const getStateData = (state) => {
  return state.get("users");
};
export const getUserData = createSelector(getStateData, (state) => {
  return state.get("list");
});
export const getLoadingStatus = createSelector(getStateData, (state) => {
  return state.get("loading");
});
export const getError = createSelector(getStateData, (state) => {
  return state.get("error");
});
