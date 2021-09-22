import axios from "axios";
import { API_KEY, API_ENDPOINT } from "../constants";

export function getMoviesList(page = 1) {
  return axios.get(
    `${API_ENDPOINT}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
}

export function getPeopleList(page = 1) {
  return axios.get(
    `${API_ENDPOINT}person/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
}

export const GetTvShowsList = (page = 1) => {
  return axios.request(
    `${API_ENDPOINT}tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};

export const getTrendingShowsList = (page = 1) => {
  return axios.request(
    `${API_ENDPOINT}trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};

export const getUpComingMovies = (page = 1) => {
  return axios.request(
    `${API_ENDPOINT}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  );
};

export const getDetailViewData = (id, component) => {
  let detailURL = `${API_ENDPOINT}${component}/${id}?api_key=${API_KEY}&language=en-US`;
  let reviewURL = `${API_ENDPOINT}${component}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return component === "person"
    ? axios.get(detailURL)
    : Promise.all([axios.request(detailURL), axios.request(reviewURL)]);
};

export function getSearchList(queryData, component) {
  return axios.get(
    `${API_ENDPOINT}search/${component}/?api_key=${API_KEY}&language=en-US&query=${queryData}&page=1&include_adult=false`
  );
}
