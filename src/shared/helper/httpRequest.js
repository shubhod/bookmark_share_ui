import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
export const httpRequest=(url,method,data,params,needToken,...other)=>
{
  let axiosInstance;
  switch (method) {
    case "post":
      axiosInstance = axios({ url, method, data,...other});
      break;
    case "get":
      axiosInstance= axios({ url, method, params,...other});
      break;
    default:
      axiosInstance=null;
      break;
  }
  return axiosInstance;
};
