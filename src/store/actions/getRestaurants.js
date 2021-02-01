import { GET_RESTAURANTS, RESTAURANTS_ERROR } from "../types";
import axios from "axios";

export const getRestaurants = (searchInput) => async (dispatch) => {
  try {
    const exactMatch = false;

    const cityRes = await axios
      .get(`https://developers.zomato.com/api/v2.1/cities`, {
        headers: {
          "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
        },
        params: { q: searchInput },
      })
      .then(({ data }) => {
        const cities = exactMatch
          ? data.location_suggestions.filter(
              (match) => match.name === searchInput
            )
          : data.location_suggestions.filter((match) =>
              match.name.toLowerCase().includes(searchInput.toLowerCase())
            );
        var cityIDParams = new URLSearchParams();
        const mappedCityIDs = cities.map((c) => {
          console.log(c.name);
          cityIDParams.append("city_id", c.id);
        });
        console.log("cityIDParams");
        console.log(cityIDParams);
        return axios
          .get(`https://developers.zomato.com/api/v2.1/search`, {
            headers: {
              "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
            },
            params: cityIDParams,
          })
          .then(({ data }) => {
            console.log(data);
            return data.restaurants.map(({ restaurant }) => {
              const {
                id,
                name,
                cuisines,
                price_range,
                user_rating,
                thumb,
                location,
              } = restaurant;

              return {
                id: id,
                name: name,
                location: location.address,
                cuisines: cuisines,
                price_range: price_range,
                user_rating: user_rating.aggregate_rating,
                thumb: thumb,
              };
            });
          });
      });
    dispatch({
      type: GET_RESTAURANTS,
      payload: cityRes,
    });
  } catch (e) {
    dispatch({
      type: RESTAURANTS_ERROR,
      payload: e,
    });
  }
};
