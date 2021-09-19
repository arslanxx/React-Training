import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
const rootReducer = combineReducers({
  movieList: moviesReducer,
  peopleList: peopleReducer,
});

export default rootReducer;
