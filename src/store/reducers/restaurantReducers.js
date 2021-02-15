const initialState = {
  possibleCities: [],
  restaurants: [],
  loading: false,
  init: true,
};

const restaurantReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_RESTAURANTS":
      return {
        ...state,
        loading: true,
        init: false,
      };
    case "GET_RESTAURANTS_SUCCEEDED":
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
      };
    case "GET_RESTAURANTS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default restaurantReducers;
