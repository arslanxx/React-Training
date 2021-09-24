import { connect } from "react-redux";
import {
  getTvShowData,
  getTvShowError,
  showTvShowLoader,
  getTvShowPage,
} from "../../store/selectors/tvShowSelector";
import {
  fetchTvShowRequest,
  searchTVRequest,
} from "../../store/actions/tvShowActions";
import TvShowComponent from "./TvShowComponent";

const mapStateToProps = (state) => {
  return {
    tvShowData: getTvShowData(state),
    tvShowLoader: showTvShowLoader(state),
    error: getTvShowError(state),
    tvPage: getTvShowPage(state),
  };
};

const mapDispatchToProps = {
  tvShowReq: fetchTvShowRequest,
  searchReq: searchTVRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowComponent);
