import { GET_RESTAURANTS, RESTAURANTS_ERROR, GET_CITIES } from "../types";
import axios from "axios";

export const getRestaurants = (searchValues) => async (dispatch) => {
  try {
    const exactMatch = false;
    const cityRes = await axios
      .get(`https://developers.zomato.com/api/v2.1/cities`, {
        headers: {
          "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
        },
        params: { q: searchValues.city },
      })
      .then(({ data }) => {
        const cities = exactMatch
          ? data.location_suggestions.filter(
              (match) => match.name === searchValues.city
            )
          : data.location_suggestions.filter((match) =>
              match.name.toLowerCase().includes(searchValues.city.toLowerCase())
            );
        var params = new URLSearchParams();
        const mappedCityNames = cities.map((c) => {
          params.append("city_id", c.id);
          return c.name;
        });
        if (searchValues.details) {
          params.append("q", searchValues.details);
        }
        dispatch({
          type: GET_CITIES,
          payload: mappedCityNames,
        });
        return axios
          .get(`https://developers.zomato.com/api/v2.1/search`, {
            headers: {
              "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
            },
            params: params,
          })
          .then(({ data }) => {
            return data.restaurants.map(({ restaurant }) => {
              const {
                id,
                name,
                cuisines,
                price_range,
                user_rating,
                thumb,
                location,
                city,
              } = restaurant;

              return {
                id: id,
                name: name,
                location: location.address,
                city: location.city,
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
