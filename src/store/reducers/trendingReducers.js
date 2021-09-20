import { fromJS } from "immutable";
import {
  FETCH_TRENDING_FAILURE,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_REQUEST,
} from "../constants";

const trendingReducer = (state = fromJS({ trending: {} }), action) => {
  switch (action.type) {
    case FETCH_TRENDING_REQUEST:
      return state.setIn(["trending", "loading"], true);
    case FETCH_TRENDING_SUCCESS:
      return state
        .setIn(["trending", "loading"], false)
        .setIn(["trending", "data"], action.payload);
    case FETCH_TRENDING_FAILURE:
      return state
        .setIn(["trending", "loading"], false)
        .setIn(["trending", "error"], action.payload);
    default:
      return state;
  }
};

export default trendingReducer;
