import axios from "axios";
import {
  GET_RESTAURANTS,
  RESTAURANTS_ERROR,
  LOADING_RESTAURANTS,
  GET_CITIES,
} from "../types";

const getRestaurants = (searchValues) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING_RESTAURANTS,
    });
    const exactMatch = false;
    const cityRes = await axios
      .get("https://developers.zomato.com/api/v2.1/cities", {
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
        const params = new URLSearchParams();
        const mappedCityNames = cities.map((c) => {
          params.append("city_id", c.id);
          return c.name;
        });
        if (searchValues.keywords) {
          params.append("q", searchValues.keywords);
        }
        dispatch({
          type: GET_CITIES,
          payload: mappedCityNames,
        });
        return axios
          .get("https://developers.zomato.com/api/v2.1/search", {
            headers: {
              "user-key": process.env.REACT_APP_ZOMATO_API_KEY,
            },
            params,
          }) // eslint-disable-next-line no-shadow
          .then(({ data }) =>
            data.restaurants.map(({ restaurant }) => {
              const {
                id,
                name,
                cuisines, // eslint-disable-next-line camelcase
                price_range, // eslint-disable-next-line camelcase
                user_rating,
                thumb,
                location,
              } = restaurant;
              return {
                id,
                name,
                location: location.address,
                city: location.city,
                cuisines,
                priceRange: price_range,
                userRating: user_rating.aggregate_rating,
                thumb,
              };
            })
          );
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
export default getRestaurants;
