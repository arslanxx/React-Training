import { connect } from "react-redux";
import {
  getTrendingData,
  getTrendingError,
  showTrendingLoader,
  getTrendingPage,
} from "../../store/selectors/trendingSelector";
import {
  fetchTrendingRequest,
  searchTrendingMovieRequest,
} from "../../store/actions/trendingActions";
import TrendingMovies from "./TrendingMovies";

const mapStateToProps = (state) => {
  return {
    trendingData: getTrendingData(state),
    trendingLoader: showTrendingLoader(state),
    error: getTrendingError(state),
    trendingPage: getTrendingPage(state),
  };
};

const mapDispatchToProps = {
  trendingReq: fetchTrendingRequest,
  searchReq: searchTrendingMovieRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingMovies);
