import { all, spawn } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import peopleSaga from "./peopleSaga";
import tvShowSaga from "./tvShowSaga";
import trendingSaga from "./trendingSaga";
import upComingMoviesSaga from "./upComingMoviesSaga";
import detailSaga from "./detailSaga";

function* allSagas() {
  yield all([
    spawn(movieSaga),
    spawn(peopleSaga),
    spawn(tvShowSaga),
    spawn(trendingSaga),
    spawn(upComingMoviesSaga),
    spawn(detailSaga),
  ]);
}

export default function* root() {
  yield all([spawn(allSagas)]);
}
