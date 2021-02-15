// import axios from "axios";
import { GET_CITIES_REQUESTED, GET_CITIES_FAILED } from "../types";

const getCities = (searchValues) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CITIES_REQUESTED,
      payload: searchValues.city,
    });
    // axios
    //   .get("https://developers.zomato.com/api/v2.1/cities", {
    //     headers: {
    //       "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
    //     },
    //     params: { q: searchValues.city },
    //   })
    //   .then(({ data }) => {
    //     const cities = data.location_suggestions.filter((match) =>
    //       match.name.toLowerCase().includes(searchValues.city.toLowerCase())
    //     );
    //     const params = new URLSearchParams();
    //     const mappedCityNames = cities.map((c) => {
    //       params.append("city_id", c.id);
    //       return c.name;
    //     });
    //     if (searchValues.keywords) {
    //       params.append("q", searchValues.keywords);
    //     }
    //     dispatch({
    //       type: GET_CITIES_REQUESTED,
    //       payload: mappedCityNames,
    //     });
    //   });
  } catch (e) {
    dispatch({
      type: GET_CITIES_FAILED,
      payload: e,
    });
  }
};
export default getCities;
