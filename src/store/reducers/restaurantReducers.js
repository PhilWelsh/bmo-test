import { GET_RESTAURANTS, RESTAURANTS_ERROR, GET_CITIES } from "../types";

const initialState = {
  possibleCities: [],
  restaurants: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
      };
    case RESTAURANTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        possibleCities: action.payload,
      };
    default:
      return state;
  }
}
