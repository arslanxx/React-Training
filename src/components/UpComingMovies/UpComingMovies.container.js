import { connect } from "react-redux";
import UpComingMovies from "./UpComingMovies";
import {
  getUpComingMoviesData,
  getUpComingMoviesError,
  showUpComingMoviesLoader,
} from "../../store/selectors/upComingMoviesSelector";
import {
  fetchUpComingMoviesRequest,
  searchUpComingMovieRequest,
} from "../../store/actions/upComingActions";

const mapStateToProps = (state) => {
  return {
    upComingMoviesData: getUpComingMoviesData(state),
    upComingMoviesLoader: showUpComingMoviesLoader(state),
    error: getUpComingMoviesError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upComingMoviesReq: (page) => dispatch(fetchUpComingMoviesRequest(page)),
    searchReq: (paramData) => dispatch(searchUpComingMovieRequest(paramData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpComingMovies);
