import { connect } from "react-redux";
import MovieComponent from "./MovieComponent";
import {
  getMovieData,
  getMovieError,
  showMovieLoader,
  getMoviesPage,
} from "../../store/selectors/movieSelector";
import {
  fetchMoviesRequest,
  fetchSearchMoviesRequest,
} from "../../store/actions/movieActions";

const mapStateToProps = (state) => {
  return {
    movieData: getMovieData(state),
    movieLoader: showMovieLoader(state),
    error: getMovieError(state),
    moviePage: getMoviesPage(state),
  };
};

const mapDispatchToProps = {
  movieReq: fetchMoviesRequest,
  searchReq: fetchSearchMoviesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
