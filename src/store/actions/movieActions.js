import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "../constants";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIE_REQUEST,
  };
};

export const fetchMoviesSuccess = (users) => {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: users,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
};
