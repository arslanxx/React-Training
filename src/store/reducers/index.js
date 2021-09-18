import moviesReducer from "./moviesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movieList: moviesReducer,
});

export default rootReducer;
