import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED,
  GET_CITIES_REQUESTED,
} from "../types";

const apiUrl = "https://developers.zomato.com/api/v2.1/cities";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
    },
    params: { q: searchValues.city },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchCities(action) {
  try {
    const cities = yield call(getCities, action.payload);
    console.log(cities), console.log(action.payload);
    // yield put({ type: GET_CITIES_SUCCESS, cities });
  } catch (e) {
    yield put({ type: GET_CITIES_FAILED, message: e.message });
  }
}

function* citySaga() {
  yield takeEvery(GET_CITIES_REQUESTED, fetchCities);
}

export default citySaga;
