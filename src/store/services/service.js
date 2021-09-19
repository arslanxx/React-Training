import axios from "axios";
import { API_KEY, API_ENDPOINT } from "../constants";

export function getMoviesList() {
  return axios.get(
    `${API_ENDPOINT}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function getPeopleList() {
  return axios.get(
    `${API_ENDPOINT}person/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export const GetTvShowsList = () => {
  return axios.request(
    `${API_ENDPOINT}tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
};
