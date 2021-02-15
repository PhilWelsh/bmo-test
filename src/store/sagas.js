import { call, put, takeLatest } from "redux-saga/effects";
import getCities from "./actions/getCities";

// function* createPostSaga(action) {
//     const token = yield select(selectToken);
//     const headerParams = {
//       Authorization: `JWT ${token}`
//     };
//     console.log(token, headerParams);
//     try {
//       yield call(axios.post, "/posts/", action.payload, {headers:headerParams});
//       yield call(getPosts());
//     } catch (error) {
//       console.log(error);
//     }
//   }

function* fetchCities(action) {
  const { city } = action.payload;
  console.log(city);
  try {
    const response = yield call(getCities, city);
    yield put({
      type: "GET_CITIES_SUCCEEDED",
      payload: response,
    });
  } catch (error) {
    yield put({ type: "GET_CITIES_FAILED", error });
  }
}

function* rootSaga() {
  yield takeLatest("GET_CITIES_REQUESTED", fetchCities);
}

export default rootSaga;

// const cities = yield call(getCities, action.payload.city);
// // console.log(action.payload.city);
// yield put({ type: "GET_CITIES_SUCCEEDED", cities });
// }
