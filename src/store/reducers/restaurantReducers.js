import {
  GET_RESTAURANTS,
  GET_CITIES_FAILED,
  LOADING_RESTAURANTS,
  GET_CITIES_REQUESTED,
} from "../types";

const initialState = {
  possibleCities: [],
  restaurants: [],
  loading: false,
  init: true,
};

const restaurantReducers = (state = initialState, action) => {
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
    case GET_CITIES_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_CITIES_REQUESTED:
      return {
        ...state,
        possibleCities: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducers;
