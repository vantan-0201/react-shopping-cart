import * as types from "../../contants/actionTypes";

// export const actFetchProductsRequest = () => {
//     return (dispatch) => {
//       dispatch(actGetProductsPending());

//       Axios.get("http://localhost:3004/dong-ho")
//         .then((res) => {
//           const products = res.data;
//           dispatch(actGetProductSuccess(products));
//         })
//         .catch((error) => dispatch(actGetProductsError(error)));
//     };
//   };

export const actGetProductsPending = () => ({
  type: types.GET_PRODUCT_PENDDING,
});

export const actGetProductSuccess = (products) => ({
  type: types.GET_PRODUCT_PENDDING,
  products,
});

export const actGetProductsError = (error) => ({
  type: types.GET_PRODUCT_PENDDING,
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

export const actAddToCart = (products) => ({
  type: types.ADD_TO_CART,
  products,
});
export const actRemoveToCart = (_id) => ({
  type: types.REMOVE_TO_CART,
  _id,
});
