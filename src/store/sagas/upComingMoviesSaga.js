import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_UPCOMINGMOVIES_REQUEST } from "../constants";
import { getUpComingMovies } from "../services/service";
import {
  fetchUpComingMoviesSuccess,
  fetchUpComingMoviesFailure,
} from "../actions/upComingActions";

function* upComingMoviesSaga() {
  try {
    const upComingList = yield call(getUpComingMovies);
    yield put(fetchUpComingMoviesSuccess(upComingList.data.results));
  } catch (e) {
    yield put(fetchUpComingMoviesFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_UPCOMINGMOVIES_REQUEST, upComingMoviesSaga)]);
}
