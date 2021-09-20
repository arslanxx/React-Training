import MovieComponent from "../components/MovieComponent";
import Person from "../components/PersonComponent";
import TvShowComponent from "../components/TvShowComponent";
import UpComingMovies from "../components/UpComingMovies";
import TrendingMovies from "../components/TrendingMovies";

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
  {
    path: "/upcoming",
    Component: UpComingMovies,
  },
  {
    path: "/trending",
    Component: TrendingMovies,
  },
];
