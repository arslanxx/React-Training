import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
import tvShowReducer from "./tvShowReducer";

const rootReducer = combineReducers({
  movieList: moviesReducer,
  peopleList: peopleReducer,
  tvShowList: tvShowReducer,
});

export default rootReducer;
