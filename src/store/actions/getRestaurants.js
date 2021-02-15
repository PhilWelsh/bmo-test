import axios from "axios";

const getRestaurants = (searchValues) => async (dispatch) => {
  const params = new URLSearchParams();
  if (searchValues.keywords) {
    params.append("q", searchValues.keywords);
  }
  try {
    const cityRestaurants = axios
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
    dispatch({
      type: "GET_RESTAURANTS_SUCCEEDED",
      payload: cityRestaurants,
    });
  } catch (e) {
    dispatch({
      type: "GET_RESTAURANTS_FAILED",
      payload: e,
    });
  }
};
export default getRestaurants;
