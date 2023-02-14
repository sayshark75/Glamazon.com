import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import { MakeupReducer } from "./Products/MakeUp/MakeUp.reducer";
import { ProductReducer } from "./Products/Products.reducer";
import thunk from "redux-thunk";
import { WishlistReducer } from "./Cart/Wishlist/Wishlist.reducer";
import { ShoppingBagReducer } from "./Cart/ShoppingBag/ShoppingBag.reducer";

const rootReducer = combineReducers({
  MakeUpManager: MakeupReducer,
  WishlistManager: WishlistReducer,
  ShoppingBagManager: ShoppingBagReducer,
  ProductManager: ProductReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
