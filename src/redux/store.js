import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware());

const store = createStore(reducers, composedEnhancer);

export default store;
