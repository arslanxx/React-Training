import MovieComponent from "./MovieComponent";
import { connect } from "react-redux";
import {
  getMovieData,
  getMovieError,
  showMovieLoader,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    movieReq: (page) => dispatch(fetchMoviesRequest(page)),
    searchReq: (paramData) => dispatch(fetchSearchMoviesRequest(paramData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
