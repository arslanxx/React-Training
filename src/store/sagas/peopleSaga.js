import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_PEOPLE_REQUEST, SEARCH_PEOPLE_REQUEST } from "../constants";
import { getPeopleList, getSearchList } from "../services/service";
import {
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "../actions/peopleActions";

function* peopleSaga({ payload, page }) {
  try {
    const peopleList = !payload
      ? yield call(getPeopleList, page)
      : yield call(
          getSearchList,
          payload.query,
          payload.component,
          payload.page
        );
    yield put(fetchPeopleSuccess(peopleList.data));
  } catch (e) {
    yield put(fetchPeopleFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_PEOPLE_REQUEST, peopleSaga),
    takeEvery(SEARCH_PEOPLE_REQUEST, peopleSaga),
  ]);
}
