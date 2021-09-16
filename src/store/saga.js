import { call, put, takeEvery } from "redux-saga/effects";
import { getData } from "../services/apiCalls";

function* fetchUsers() {
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

//fork spwan all saga effects
export default mySaga;
