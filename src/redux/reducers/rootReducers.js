import { combineReducers } from "redux";

import products from "./ReducerProducts";
import cartProducts from "./ReducerCartProducts";
import productDetail from "./ReducerProductDetail";
import isOpenDrawer from "./ReducerIsOpenDrawer";

const rootReducers = combineReducers({
  products,
  cartProducts,
  productDetail,
  isOpenDrawer,
});

export default rootReducers;
