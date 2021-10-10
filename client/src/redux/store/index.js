import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";


const initialStore = {};

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));

export default store;
