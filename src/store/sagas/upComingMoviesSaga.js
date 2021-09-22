import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_UPCOMINGMOVIES_REQUEST,
  SEARCH_UPCOMING_REQUEST,
} from "../constants";
import { getUpComingMovies, getSearchList } from "../services/service";
import {
  fetchUpComingMoviesSuccess,
  fetchUpComingMoviesFailure,
} from "../actions/upComingActions";

function* upComingMoviesSaga({ payload, page }) {
  try {
    const upComingList = !payload
      ? yield call(getUpComingMovies, page)
      : yield call(getSearchList, payload.query, payload.component);
    yield put(fetchUpComingMoviesSuccess(upComingList.data));
  } catch (e) {
    yield put(fetchUpComingMoviesFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_UPCOMINGMOVIES_REQUEST, upComingMoviesSaga),
    takeEvery(SEARCH_UPCOMING_REQUEST, upComingMoviesSaga),
  ]);
}
