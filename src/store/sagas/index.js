import { all, spawn } from "redux-saga/effects";
import movieSaga from "./movieSaga";
import peopleSaga from "./peopleSaga";

function* allSagas() {
  yield all([spawn(movieSaga), spawn(peopleSaga)]);
}

export default function* root() {
  yield all([spawn(allSagas)]);
}
