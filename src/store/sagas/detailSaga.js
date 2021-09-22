import { put, all, takeEvery, call } from "redux-saga/effects";
import { FETCH_DETAILVIEW_REQUEST } from "../constants";
import { getDetailViewData } from "../services/service";
import {
  fetchDetailSuccess,
  fetchDetailFailure,
  fetchReviewSuccess,
} from "../actions/detailsActions";

function* detailSaga({ payload }) {
  try {
    const detailView = yield call(
      getDetailViewData,
      payload.id,
      payload.component
    );
    if (payload.component === "person") {
      yield put(fetchDetailSuccess(detailView.data));
    } else {
      yield put(fetchDetailSuccess(detailView[0].data));
      yield put(fetchReviewSuccess(detailView[1].data.results));
    }
  } catch (e) {
    yield put(fetchDetailFailure(e.response.data.status_message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_DETAILVIEW_REQUEST, detailSaga)]);
}
