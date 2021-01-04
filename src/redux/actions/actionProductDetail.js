import * as types from "../../contants/actionTypes";
import productApi from "../../Api/productApi";

export function actFetchProductDetailRequest(url) {
  return (dispatch) => {
    dispatch(actGetProductDetailPending());
    const getProuctDetail = async () => {
      try {
        const res = await productApi.getProduct(url);
        dispatch(actGetProductDetailSuccess(res));
      } catch (error) {
        dispatch(actGetProductDetailError(error));
      }
    };
    getProuctDetail();
  };
}

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
