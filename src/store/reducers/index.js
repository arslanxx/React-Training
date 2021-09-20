import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
import tvShowReducer from "./tvShowReducer";
import trendingReducer from "./trendingReducers";

const rootReducer = combineReducers({
  movieList: moviesReducer,
  peopleList: peopleReducer,
  tvShowList: tvShowReducer,
  trendingList: trendingReducer,
});

export default rootReducer;
