import {
  FETCH_TRENDING_REQUEST,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_FAILURE,
  SEARCH_TRENDINGMOVIE_REQUEST,
} from "../constants";

export const fetchTrendingRequest = () => {
  return {
    type: FETCH_TRENDING_REQUEST,
  };
};

export const fetchTrendingSuccess = (trending) => {
  return {
    type: FETCH_TRENDING_SUCCESS,
    payload: trending,
  };
};

export const fetchTrendingFailure = (error) => {
  return {
    type: FETCH_TRENDING_FAILURE,
    payload: error,
  };
};

export const searchTrendingMovieRequest = (queryData) => {
  return {
    type: SEARCH_TRENDINGMOVIE_REQUEST,
    payload: queryData,
  };
};
