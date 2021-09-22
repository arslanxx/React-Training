import { connect } from "react-redux";
import {
  getPeopleData,
  getPeopleError,
  showPeopleLoader,
} from "../../store/selectors/peopleSelector";
import {
  fetchPeopleRequest,
  searchPeopleRequest,
} from "../../store/actions/peopleActions";
import Person from "./PersonComponent";

const mapStateToProps = (state) => {
  return {
    peopleData: getPeopleData(state),
    peopleLoader: showPeopleLoader(state),
    error: getPeopleError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    peopleReq: () => dispatch(fetchPeopleRequest()),
    searchReq: (paramData) => dispatch(searchPeopleRequest(paramData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
