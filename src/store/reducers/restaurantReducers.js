import {
  GET_RESTAURANTS,
  RESTAURANTS_ERROR,
  LOADING_RESTAURANTS,
  GET_CITIES,
} from "../types";

const initialState = {
  possibleCities: [],
  restaurants: [],
  loading: false,
  init: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_RESTAURANTS:
      return {
        ...state,
        loading: true,
        init: false,
      };
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
