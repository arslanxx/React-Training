import DetailComponent from "./DetailComponent";
import { connect } from "react-redux";
import {
  getDetailData,
  getDetailError,
  showDetailLoader,
  showReviews,
} from "../../store/selectors/detailSelector";
import { fetchDetailRequest } from "../../store/actions/detailsActions";

const mapStateToProps = (state) => {
  return {
    detailData: getDetailData(state),
    detailLoader: showDetailLoader(state),
    error: getDetailError(state),
    reviews: showReviews(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    detailReq: (id, component) => dispatch(fetchDetailRequest(id, component)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
