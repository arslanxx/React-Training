import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_MOVIE_REQUEST } from "../constants";
import { getMoviesList } from "../services/service";
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
} from "../actions/movieActions";

function* movieSaga() {
  try {
    const movieList = yield call(getMoviesList);
    yield put(fetchMoviesSuccess(movieList.data.results));
  } catch (e) {
    yield put(fetchMoviesFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_MOVIE_REQUEST, movieSaga)]);
}
