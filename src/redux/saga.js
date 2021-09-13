import { call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../apiCalls/apiCalls";

function* fetchUsers() {
  //   yield put({ type: "FETCH_USERS_REQUEST" });
  try {
    const users = yield call(getData); //worker saga
    yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
  } catch (e) {
    yield put({ type: "FETCH_USERS_FAILURE", payload: e.message });
  }
}
function* mySaga() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsers); //watcher saga
}

// function* mySaga() {
//   yield takeLatest("FETCH_USERS_REQUEST", fetchUsers); //watched the lastest request
// }

//fork spwan all saga effects
export default mySaga;
