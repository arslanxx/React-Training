import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
} from "../constants";
import { getMoviesList } from "../services/service";

function* movieSaga() {
  try {
    const movieList = yield call(getMoviesList);
    yield put({ type: FETCH_MOVIE_SUCCESS, payload: movieList.data.results });
  } catch (e) {
    yield put({
      type: FETCH_MOVIE_FAILURE,
      payload: e.response.data.status_message,
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_MOVIE_REQUEST, movieSaga)]);
}
