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

// function handleResponse(response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       if (response.status === 401) {
//         // auto logout if 401 response returned from api
//         // logout();
//         // location.reload(true);
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }
