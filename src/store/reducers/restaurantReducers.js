import { GET_RESTAURANTS, RESTAURANTS_ERROR } from "../types";

const initialState = {
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
    default:
      return state;
  }
}
