import { httpRequest } from "../../../shared/helper/httpRequest";
import { storeAuthToken } from "../methods/storeAuthToken";

export const checkUserNameExists = async (userName) => {
  try {
    let httpResponse = await httpRequest(
      `/user/checkUserExists/${userName}`,
      "get"
    );
    return httpResponse.data.isUser;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
export const registerUser = async (body) => {
  try {
    let response = await httpRequest("/user/registerUser", "post", body);
    console.log("----------response", response);
    storeAuthToken(response.data.token);
  } catch (error) {
    console.log(error.message);
  }
};
