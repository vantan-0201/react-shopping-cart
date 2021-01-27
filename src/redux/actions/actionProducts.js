import * as types from "../../contants/actionTypes";

// import products from "../../data.json";

import productApi from "../../Api/productApi";

export function actFetchProductsRequest(_page, _limit) {
  return (dispatch) => {
    dispatch(actGetProductsPending());

    const getProucts = async () => {
      try {
        const params = {
          _page,
          _limit,
        };
        const res = await productApi.getProductAll(params);
        dispatch(actGetProductSuccess(res));
      } catch (error) {
        dispatch(actGetProductsError(error));
      }
    };
    getProucts();
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
export const actRemoveToCart = (id) => ({
  type: types.REMOVE_TO_CART,
  id,
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

export const actRemoveCountCart = (product, count) => ({
  type: types.REMOVE_COUNT_CART,
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
