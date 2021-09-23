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

const mapDispatchToProps = {
  peopleReq: fetchPeopleRequest,
  searchReq: searchPeopleRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
