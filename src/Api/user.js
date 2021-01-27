import axiosClient from "../Api/axiosClient";

import * as config from "../contants/config";

export const FindMe = async (id) => {
  try {
    const data = await axiosClient.get(`${config.ME}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
