import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
export const httpRequest = (url, method, data, params, needToken) => {
  return axios({
    url,
    method,
    params,
    data,
  });
};
