import {
  FETCH_DETAILVIEW_FAILURE,
  FETCH_DETAILVIEW_SUCCESS,
  FETCH_DETAILVIEW_REQUEST,
} from "../constants";

export const fetchDetailRequest = (detailData) => {
  return {
    type: FETCH_DETAILVIEW_REQUEST,
    payload: detailData,
  };
};

export const fetchDetailSuccess = (detailData) => {
  return {
    type: FETCH_DETAILVIEW_SUCCESS,
    payload: detailData,
  };
};

export const fetchDetailFailure = (error) => {
  return {
    type: FETCH_DETAILVIEW_FAILURE,
    payload: error,
  };
};
