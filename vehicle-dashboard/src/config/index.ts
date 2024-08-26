/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import axios from "axios";
export const BaseURL = import.meta.env.VITE_REACT_BASE_URL;

const instance = axios.create({
  baseURL: BaseURL,
});
export const setAuthToken = (tokeen?: string) => {
  try {
    const token = sessionStorage.getItem("Token") as string;
    if (token) {
      instance.defaults.headers.common.Authorization = `${token}`;
    }
    if (tokeen) {
      instance.defaults.headers.common.Authorization = `${tokeen}`;
    }
  
  } catch (e) {}
};
setAuthToken();
export const DeleteAuthToken = () => {
  delete instance.defaults.headers.common.Authorization;
};

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default instance;
