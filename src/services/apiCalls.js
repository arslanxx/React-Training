import axios from "axios";

export function getData() {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
