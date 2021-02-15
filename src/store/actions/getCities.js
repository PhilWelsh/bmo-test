import axios from "axios";
import { put } from "redux-saga/effects";

function* getCities (city) {
  console.log("hi");
  return axios
    .get("https://developers.zomato.com/api/v2.1/cities", {
      headers: {
        "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
      },
      params: { q: city },
    })
    .then(({ data }) => {
      const cities = data.location_suggestions.filter((match) =>
        match.name.toLowerCase().includes(city.toLowerCase())
      );
      const mappedCityNames = cities.map((c) => c.name);
      console.log(mappedCityNames);
      yield put({
        type: "GET_CITIES_SUCCEEDED",
        payload: mappedCityNames,
      });
    });
};
export default getCities;
