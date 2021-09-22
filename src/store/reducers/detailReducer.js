import { fromJS } from "immutable";
import {
  FETCH_DETAILVIEW_FAILURE,
  FETCH_DETAILVIEW_REQUEST,
  FETCH_DETAILVIEW_SUCCESS,
  FETCH_REVIEWS_SUCCESS,
} from "../constants";

export const detailReducer = (state = fromJS({ detailView: {} }), action) => {
  switch (action.type) {
    case FETCH_DETAILVIEW_REQUEST:
      return state.setIn(["detailView", "loading"], true);
    case FETCH_DETAILVIEW_SUCCESS:
      return state
        .setIn(["detailView", "loading"], false)
        .setIn(["detailView", "data"], action.payload);
    case FETCH_REVIEWS_SUCCESS:
      return state.setIn(["detailView", "reviews"], action.payload);
    case FETCH_DETAILVIEW_FAILURE:
      return state
        .setIn(["detailView", "loading"], false)
        .setIn(["detailView", "error"], action.payload);
    default:
      return state;
  }
};
