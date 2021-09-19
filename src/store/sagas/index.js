import { all, spawn } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import peopleSaga from "./peopleSaga";
import tvShowSaga from "./tvShowSaga";

function* allSagas() {
  yield all([spawn(movieSaga), spawn(peopleSaga), spawn(tvShowSaga)]);
}

export default function* root() {
  yield all([spawn(allSagas)]);
}
