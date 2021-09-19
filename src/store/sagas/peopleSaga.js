import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_PEOPLE_FAILURE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_REQUEST,
} from "../constants";
import { getPeopleList } from "../services/service";

function* peopleSaga() {
  try {
    const peopleList = yield call(getPeopleList);
    yield put({ type: FETCH_PEOPLE_SUCCESS, payload: peopleList.data.results });
  } catch (e) {
    yield put({
      type: FETCH_PEOPLE_FAILURE,
      payload: e.response.data.status_message,
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_PEOPLE_REQUEST, peopleSaga)]);
}
