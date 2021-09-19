import MovieComponent from "../components/MovieComponent";
import Person from "../components/PersonComponent";
import TvShowComponent from "../components/TvShowComponent";

export const routes = [
  {
    path: "/",
    Component: MovieComponent,
  },
  {
    path: "/people",
    Component: Person,
  },
  {
    path: "/tvShows",
    Component: TvShowComponent,
  },
];
