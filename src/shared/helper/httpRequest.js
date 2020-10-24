import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
export const httpRequest = (url, method, data, params, needToken) => {
  let axiosInstance;
  switch (method) {
    case "post":
      axiosInstance = axios({ url, method, data });
      break;
    case "get":
      axiosInstance= axios({ url, method, params });
      break;
    default:
      axiosInstance=null;
      break;
  }
  return axiosInstance;
};
