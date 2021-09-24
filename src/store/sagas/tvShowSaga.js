import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_TVSHOW_REQUEST, SEARCH_TV_REQUEST } from "../constants";
import { GetTvShowsList, getSearchList } from "../services/service";
import {
  fetchTvShowFailure,
  fetchTvShowSuccess,
} from "../actions/tvShowActions";

function* tvShowSaga({ payload, page }) {
  try {
    const tvShowList = !payload
      ? yield call(GetTvShowsList, page)
      : yield call(
          getSearchList,
          payload.query,
          payload.component,
          payload.page
        );
    yield put(fetchTvShowSuccess(tvShowList.data));
  } catch (e) {
    yield put(fetchTvShowFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TVSHOW_REQUEST, tvShowSaga),
    takeEvery(SEARCH_TV_REQUEST, tvShowSaga),
  ]);
}
