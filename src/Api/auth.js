import axiosClient from "./axiosClient";

const auth = {
  register: (user) => {
    const url = "/users";
    return axiosClient.post(url, { ...user });
  },

  Login,
};

export default auth;

function Login(params) {
  try {
    const url = "/users";
    const data = axiosClient.post(url, params);
    return data;
  } catch (err) {
    throw err;
  }
}
