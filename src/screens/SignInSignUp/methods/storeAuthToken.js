import { cookies } from "../../../shared/helper/auth";

export const storeAuthToken = (token) => {
    let cookie=cookies.getInstance();
    cookie.set('token',token,{path:'/'});
};
