import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_TVSHOW_REQUEST,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
} from "../constants";
import { GetTvShowsList } from "../services/service";

function* tvShowSaga() {
  try {
    const tvShowList = yield call(GetTvShowsList);
    yield put({ type: FETCH_TVSHOW_SUCCESS, payload: tvShowList.data.results });
  } catch (e) {
    yield put({
      type: FETCH_TVSHOW_FAILURE,
      payload: e.response.data.status_message,
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_TVSHOW_REQUEST, tvShowSaga)]);
}
