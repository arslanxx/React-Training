import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import peopleReducer from "./peopleReducer";
import tvShowReducer from "./tvShowReducer";
import trendingReducer from "./trendingReducers";
import upComingMoviesReducer from "./upComingMoviesReducer";
import { detailReducer } from "./detailReducer";

const rootReducer = combineReducers({
  movieList: moviesReducer,
  peopleList: peopleReducer,
  tvShowList: tvShowReducer,
  trendingList: trendingReducer,
  upComingMoviesList: upComingMoviesReducer,
  detailData: detailReducer,
});

export default rootReducer;
