import axios from "axios";
import { API_KEY } from "../constants";
export function getMoviesList() {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
}
