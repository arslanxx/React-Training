import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_DETAILVIEW_REQUEST } from "../constants";
import { getDetailViewData } from "../services/service";
import {
  fetchDetailSuccess,
  fetchDetailFailure,
} from "../actions/detailsActions";

function* detailSaga({ payload }) {
  try {
    const detailView = yield call(
      getDetailViewData,
      payload.id,
      payload.component
    );
    yield put(fetchDetailSuccess(detailView.data));
  } catch (e) {
    yield put(fetchDetailFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_DETAILVIEW_REQUEST, detailSaga)]);
}
