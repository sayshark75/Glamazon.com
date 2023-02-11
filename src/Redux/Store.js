import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import { MakeupReducer } from "./Products/MakeUp/MakeUp.reducer";
import { ProductReducer } from "./Products/Products.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  MakeUpManager: MakeupReducer,
  ProductManager: ProductReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
