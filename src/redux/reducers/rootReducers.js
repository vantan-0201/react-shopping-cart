import { combineReducers } from "redux";

import products from "./products";
import cartProducts from "./CartProducts";

const rootReducers = combineReducers({
  products,
  cartProducts,
});

export default rootReducers;
