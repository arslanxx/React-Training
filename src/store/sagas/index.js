import { all, spawn } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import peopleSaga from "./peopleSaga";
import tvShowSaga from "./tvShowSaga";
import trendingSaga from "./trendingSaga";

function* allSagas() {
  yield all([
    spawn(movieSaga),
    spawn(peopleSaga),
    spawn(tvShowSaga),
    spawn(trendingSaga),
  ]);
}

export default function* root() {
  yield all([spawn(allSagas)]);
}
