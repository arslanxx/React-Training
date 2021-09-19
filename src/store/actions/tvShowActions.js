import {
  FETCH_TVSHOW_REQUEST,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
} from "../constants";

export const fetchTvShowRequest = () => {
  return {
    type: FETCH_TVSHOW_REQUEST,
  };
};

export const fetchTvShowSuccess = (tv_shows) => {
  return {
    type: FETCH_TVSHOW_SUCCESS,
    payload: tv_shows,
  };
};

export const fetchTvShowFailure = (error) => {
  return {
    type: FETCH_TVSHOW_FAILURE,
    payload: error,
  };
};
