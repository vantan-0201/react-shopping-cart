import * as types from "../../contants/actionTypes/index";

import auth from "../../Api/auth";

export const actLogin = (params) => {
  try {
    const data = auth.Login(params);
    return data;
  } catch (err) {
    throw err;
  }
};

export const handleAfterLogin = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const actLoginSuccess = (user) => ({
  type: types.userConstants.LOGIN_SUCCESS,
  user,
});
export const actLoginError = (error) => ({
  type: types.userConstants.LOGIN_FAILURE,
  error,
});

export const actLogOut = () => ({
  type: types.userConstants.LOGOUT,
});
