import { fromJS } from "immutable";
import {
  FETCH_TVSHOW_REQUEST,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
  SEARCH_TV_REQUEST,
} from "../constants";

const tvShowReducer = (state = fromJS({ tvShows: {} }), action) => {
  switch (action.type) {
    case FETCH_TVSHOW_REQUEST:
    case SEARCH_TV_REQUEST:
      return state.setIn(["tvShows", "loading"], true);
    case FETCH_TVSHOW_SUCCESS:
      return state
        .setIn(["tvShows", "loading"], false)
        .setIn(["tvShows", "data"], action.payload);
    case FETCH_TVSHOW_FAILURE:
      return state
        .setIn(["tvShows", "loading"], false)
        .setIn(["tvShows", "error"], action.payload);
    default:
      return state;
  }
};

export default tvShowReducer;
