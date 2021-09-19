import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "../constants";

export const fetchPeopleRequest = () => {
  return {
    type: FETCH_PEOPLE_REQUEST,
  };
};

export const fetchPeopleSuccess = (people) => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: people,
  };
};

export const fetchPeopleFailure = (error) => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error,
  };
};
