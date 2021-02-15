const initialState = {
  possibleCities: [],
  restaurants: [],
  loading: false,
  init: true,
};

const cityReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITIES_SUCCEEDED":
      console.log(state);
      return {
        ...state,
        possibleCities: action.payload,
      };
    case "GET_CITIES_FAILED":
      return {
        message: action.error,
      };
    default:
      return state;
  }
};

export default cityReducers;
