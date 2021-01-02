import axiosClient from "./axiosClient";

const productApi = {
  getProductAll: (url = "dong-ho", params) => {
    return axiosClient.get(url, { params });
  },

  getProduct: (url) => {
    return axiosClient.get(url);
  },
  // getAccessoriesAll: (params) => {
  //   const url = "/phu-kien";
  //   return axiosClient.get(url, { params });
  // },

  // getAccessories: (id) => {
  //   const url = `/phu-kien/${id}`;
  //   return axiosClient.get(url);
  // },
};

export default productApi;
