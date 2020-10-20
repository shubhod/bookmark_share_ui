import { httpRequest } from "../../../helper/httpRequest";

export const checkUserNameExists = async (userName) => {
  try {
    let httpResponse=await httpRequest(`/checkUserExists/${userName}`,"get");
    return httpResponse.data.isUser;
  } catch (error) { 
      throw new Error(error.message);
  }
};
export const registerUser = async (body) => {
  try {
   return  await httpRequest('/registerUser',"post",body);
  } catch (error) {
    console.log(error.message);
  }
};
