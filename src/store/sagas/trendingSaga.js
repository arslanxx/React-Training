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

function* trendingSaga({ payload, page }) {
  try {
    const trendingList = !payload
      ? yield call(getTrendingShowsList, page)
      : yield call(
          getSearchList,
          payload.query,
          payload.component,
          payload.page
        );
    yield put(fetchTrendingSuccess(trendingList.data));
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
