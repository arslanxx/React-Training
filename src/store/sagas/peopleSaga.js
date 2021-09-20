import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_PEOPLE_REQUEST } from "../constants";
import { getPeopleList } from "../services/service";
import {
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "../actions/peopleActions";

function* peopleSaga() {
  try {
    const peopleList = yield call(getPeopleList);
    yield put(fetchPeopleSuccess(peopleList.data.results));
  } catch (e) {
    yield put(fetchPeopleFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_PEOPLE_REQUEST, peopleSaga)]);
}
