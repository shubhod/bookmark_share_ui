import { httpRequest } from "../../../helper/httpRequest";

export const checkUserNameExists = async (userName) => {
  try {
    await httpRequest(`/checkUserExists/${userName}`, "get");
    return true;
  } catch (error) {
    return false;
  }
};
export const registerUser = async (body) => {
  try {
    
    await httpRequest('/registerUser',"post",body);
  } catch (error) {
    console.log(error.message);
  }
};
