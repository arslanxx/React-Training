import MovieComponent from "../components/MovieComponent";
import Person from "../components/PersonComponent";
export const routes = [
  {
    path: "/",
    Component: MovieComponent,
  },
  {
    path: "/people",
    Component: Person,
  },
];
