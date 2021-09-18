import { all, spawn } from "redux-saga/effects";
import movieSaga from "./movieSaga";
function* allSagas() {
  yield all([spawn(movieSaga)]);
}

export default function* root() {
  yield all([spawn(allSagas)]);
}
