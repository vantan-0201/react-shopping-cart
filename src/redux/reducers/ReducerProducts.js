import * as types from "../../contants/actionTypes";

const initialState = {
  pending: false,
  products: [],
  error: null,
};

export default function ReducerProducts(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_PENDDING:
      return {
        ...state,
        pending: true,
      };

    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: [...action.products],
      };

    case types.GET_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case types.SORT_PRODUCTS_FIT:
      return {
        ...state,
      };

    case types.SORT_PRODUCTS_HIGHER:
      const sortHigher = state.products.slice().sort((a, b) => {
        return a.price - b.price;
      });
      return {
        ...state,
        products: [...sortHigher],
      };

    case types.SORT_PRODUCTS_LOWER:
      const sortLower = state.products.slice().sort((a, b) => {
        return b.price - a.price;
      });

      return {
        ...state,
        products: [...sortLower],
      };

    default:
      return state;
  }
}
