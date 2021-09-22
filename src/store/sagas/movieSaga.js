import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_MOVIE_REQUEST, SEARCH_MOVIE_REQUEST } from "../constants";
import { getMoviesList, getSearchList } from "../services/service";
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../actions/movieActions";

function* movieSaga({ payload, page }) {
  try {
    const movieList = !payload
      ? yield call(getMoviesList, page)
      : yield call(getSearchList, payload.query, payload.component);
    yield put(fetchMoviesSuccess(movieList.data));
  } catch (e) {
    yield put(fetchMoviesFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_MOVIE_REQUEST, movieSaga),
    takeEvery(SEARCH_MOVIE_REQUEST, movieSaga),
  ]);
}
