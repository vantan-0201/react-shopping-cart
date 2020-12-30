import * as types from "../../contants/actionTypes";

const initialState = {
  pending: false,
  productDetail: {},
  error: null,
};

export default function ProductDetail(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTDETAIL_PENDDING:
      return {
        ...state,
        pending: true,
      };

    case types.GET_PRODUCTDETAIL_SUCCESS:
      // console.log(action.product);
      const productDetail = action.product;
      return {
        ...state,
        pending: false,
        productDetail: productDetail,
      };

    case types.GET_PRODUCTDETAIL_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
