import axios from "axios";
import { httpRequest } from "../../../helper/httpRequest";

export const checkUserNameExists = async(userName) => {
  try{
    await   httpRequest(`/checkUserExists/${userName}`,"get");
     return true;
  }
  catch(error){
    return false;
  }
};
