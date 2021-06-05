import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const preloadedState = [];

const composedEnhancer = composeWithDevTools(applyMiddleware());

const store = createStore(reducers, preloadedState, composedEnhancer);

export default store;
