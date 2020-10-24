import Cookies from "universal-cookie"
export const  cookies=(()=>{
    let  cookieInstance;
    return {
        getInstance:()=>{
            if(!cookieInstance){
                cookieInstance=new Cookies();
            }
            return cookieInstance;
        }
    }
})();
