import { showHidePasswordField } from "./showHideField"
import { isPasswordMatch } from "./validateSignUp"
import { checkUserNameExists } from "../apis"

export const makeMethods=(state,setState)=>{
    return {
        focusPassword:setTimeout(() => {
            signInSignUp.passwordRef.current.focus();
          }, 100)
            
    }
}