import MovieComponent from "./MovieComponent";
import { connect } from "react-redux";
import {
  getMovieData,
  getMovieError,
  showMovieLoader,
} from "../../store/selectors/movieSelector";
import { fetchMoviesRequest } from "../../store/actions/movieActions";

const mapStateToProps = (state) => {
  return {
    movieData: getMovieData(state),
    movieLoader: showMovieLoader(state),
    error: getMovieError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    movieReq: () => dispatch(fetchMoviesRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
