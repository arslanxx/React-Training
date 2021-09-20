import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_TRENDING_REQUEST } from "../constants";
import { getTrendingShowsList } from "../services/service";
import {
  fetchTrendingSuccess,
  fetchTrendingFailure,
} from "../actions/trendingActions";

function* trendingSaga() {
  try {
    const trendingList = yield call(getTrendingShowsList);
    yield put(fetchTrendingSuccess(trendingList.data.results));
  } catch (e) {
    yield put(fetchTrendingFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_TRENDING_REQUEST, trendingSaga)]);
}
