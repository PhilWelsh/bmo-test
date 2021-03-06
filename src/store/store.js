import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initalState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
