import queryString from "query-string";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (param) => queryString.stringify(param),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
