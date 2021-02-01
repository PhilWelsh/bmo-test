import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducers";

export default combineReducers({
  restaurants: restaurantReducer,
});
