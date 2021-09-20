import {
  FETCH_UPCOMINGMOVIES_REQUEST,
  FETCH_UPCOMINGMOVIES_SUCCESS,
  FETCH_UPCOMINGMOVIES_FAILURE,
} from "../constants";

export const fetchUpComingMoviesRequest = () => {
  return {
    type: FETCH_UPCOMINGMOVIES_REQUEST,
  };
};

export const fetchUpComingMoviesSuccess = (upcoming) => {
  return {
    type: FETCH_UPCOMINGMOVIES_SUCCESS,
    payload: upcoming,
  };
};

export const fetchUpComingMoviesFailure = (error) => {
  return {
    type: FETCH_UPCOMINGMOVIES_FAILURE,
    payload: error,
  };
};
