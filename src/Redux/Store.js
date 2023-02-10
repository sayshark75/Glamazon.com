import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import { MakeupReducer } from "./Products/MakeUp/MakeUp.reducer";

const rootReducer = combineReducers({
  MakeUpManager: MakeupReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware));

export default store;
