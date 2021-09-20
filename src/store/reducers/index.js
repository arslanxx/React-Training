import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
import tvShowReducer from "./tvShowReducer";
import trendingReducer from "./trendingReducers";
import upComingMoviesReducer from "./upComingMoviesReducer";

const rootReducer = combineReducers({
  movieList: moviesReducer,
  peopleList: peopleReducer,
  tvShowList: tvShowReducer,
  trendingList: trendingReducer,
  upComingMoviesList: upComingMoviesReducer,
});

export default rootReducer;
