import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducers";
import cityReducer from "./cityReducers";

export default combineReducers({
  restaurants: restaurantReducer,
  cities: cityReducer,
});
