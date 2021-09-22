import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
} from "../constants";

export const fetchMoviesRequest = (page) => {
  return {
    type: FETCH_MOVIE_REQUEST,
    page: page,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};

export const fetchSearchMoviesRequest = (queryData) => {
  return {
    type: SEARCH_MOVIE_REQUEST,
    payload: queryData,
  };
};
