import { cookies } from "../../../shared/helper/cookies";

export const storeAuthToken = (token) => {
    let cookie=cookies.getInstance();
    cookie.set('token',token,{path:'/'});
};
