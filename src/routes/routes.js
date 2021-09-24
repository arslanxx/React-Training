import MovieComponent from "../components/MovieComponent";
import Person from "../components/PersonComponent";
import TvShowComponent from "../components/TvShowComponent";
import UpComingMovies from "../components/UpComingMovies";
import TrendingMovies from "../components/TrendingMovies";
import DetailComponent from "../components/DetailComponent";

export const routes = [
  {
    id: 1,
    path: "/",
    Component: MovieComponent,
  },
  { id: 2, path: "/people", Component: Person },
  { id: 3, path: "/tvShows", Component: TvShowComponent },
  { id: 4, path: "/upcoming", Component: UpComingMovies },
  { id: 5, path: "/trending", Component: TrendingMovies },
  { id: 6, path: "/details/:id/:component", Component: DetailComponent },
];
