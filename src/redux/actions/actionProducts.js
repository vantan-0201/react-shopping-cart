import * as types from "../../contants/actionTypes";

import products from "../../data.json";

export function actFetchProductsRequest() {
  return (dispatch) => {
    dispatch(actGetProductsPending());

    setTimeout(function () {
      dispatch(actGetProductSuccess(products.products));
    }, 1000);
  };
}

export function actFetchProductDetailRequest(num) {
  return (dispatch) => {
    dispatch(actGetProductDetailPending());
    const product = products.products.find((pos) => pos.name === num);

    setTimeout(function () {
      dispatch(actGetProductDetailSuccess(product));
    }, 1000);
  };
}

export const actGetProductsPending = () => ({
  type: types.GET_PRODUCTS_PENDDING,
});

export const actGetProductSuccess = (products) => ({
  type: types.GET_PRODUCTS_SUCCESS,
  products,
});

export const actGetProductsError = (error) => ({
  type: types.GET_PRODUCTS_ERROR,
  error,
});

export const actGetProductDetailPending = () => ({
  type: types.GET_PRODUCTDETAIL_PENDDING,
});

export const actGetProductDetailSuccess = (product) => ({
  type: types.GET_PRODUCTDETAIL_SUCCESS,
  product,
});

export const actGetProductDetailError = (error) => ({
  type: types.GET_PRODUCTDETAIL_ERROR,
  error,
});

export const actSortProductHigher = (products) => ({
  type: types.SORT_PRODUCTS_HIGHER,
  products,
});

export const actSortProductLower = (products) => ({
  type: types.SORT_PRODUCTS_LOWER,
  products,
});

export const actSortProductFit = (products) => ({
  type: types.SORT_PRODUCTS_FIT,
  products,
});

export const actAddToCart = (product) => ({
  type: types.ADD_TO_CART,
  product,
});
export const actRemoveToCart = (_id) => ({
  type: types.REMOVE_TO_CART,
  _id,
});

export const actRemoveToOneCart = (product) => ({
  type: types.REMOVE_TO_ONE_CART,
  product,
});

export const actChangeCountCart = (product, count) => ({
  type: types.CHANGE_COUNT_CART,
  product,
  count,
});

export const actOpenDrawer = (element) => ({
  type: types.OPEN_CART,
  element,
});

export const actCloseDrawer = (element) => ({
  type: types.CLOSE_CART,
  element,
});
