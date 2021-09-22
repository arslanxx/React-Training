import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_TRENDING_REQUEST,
  SEARCH_TRENDINGMOVIE_REQUEST,
} from "../constants";
import { getTrendingShowsList, getSearchList } from "../services/service";
import {
  fetchTrendingSuccess,
  fetchTrendingFailure,
} from "../actions/trendingActions";

function* trendingSaga({ payload }) {
  try {
    const trendingList = !payload
      ? yield call(getTrendingShowsList)
      : yield call(getSearchList, payload.query, payload.component);
    yield put(fetchTrendingSuccess(trendingList.data.results));
  } catch (e) {
    yield put(fetchTrendingFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TRENDING_REQUEST, trendingSaga),
    takeEvery(SEARCH_TRENDINGMOVIE_REQUEST, trendingSaga),
  ]);
}
