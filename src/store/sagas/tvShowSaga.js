import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_TVSHOW_REQUEST } from "../constants";
import { GetTvShowsList } from "../services/service";
import {
  fetchTvShowFailure,
  fetchTvShowSuccess,
} from "../actions/tvShowActions";

function* tvShowSaga() {
  try {
    const tvShowList = yield call(GetTvShowsList);
    yield put(fetchTvShowSuccess(tvShowList.data.results));
  } catch (e) {
    yield put(fetchTvShowFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_TVSHOW_REQUEST, tvShowSaga)]);
}
