import {
  FETCH_UPCOMINGMOVIES_REQUEST,
  FETCH_UPCOMINGMOVIES_SUCCESS,
  FETCH_UPCOMINGMOVIES_FAILURE,
  SEARCH_UPCOMING_REQUEST,
} from "../constants";

export const fetchUpComingMoviesRequest = (page) => {
  return {
    type: FETCH_UPCOMINGMOVIES_REQUEST,
    page: page,
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

export const searchUpComingMovieRequest = (queryData) => {
  return {
    type: SEARCH_UPCOMING_REQUEST,
    payload: queryData,
  };
};
