import { connect } from "react-redux";
import {
  getTvShowData,
  getTvShowError,
  showTvShowLoader,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tvShowReq: () => dispatch(fetchTvShowRequest()),
    searchReq: (paramData) => dispatch(searchTVRequest(paramData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowComponent);
