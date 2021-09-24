import {
  FETCH_TVSHOW_REQUEST,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
  SEARCH_TV_REQUEST,
} from "../constants";

export const fetchTvShowRequest = (page) => {
  return {
    type: FETCH_TVSHOW_REQUEST,
    page: page,
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

export const searchTVRequest = (queryData) => {
  return {
    type: SEARCH_TV_REQUEST,
    payload: queryData,
  };
};
