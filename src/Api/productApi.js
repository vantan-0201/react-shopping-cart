import axiosClient from "./axiosClient";
import * as config from "../contants/config";

const productApi = {
  getProductAll: (params) => {
    const url = `${config.PRODUCTS}`;
    return axiosClient.get(url, { params });
  },

  getProduct: (id) => {
    const url = `${config.PRODUCTS}/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
