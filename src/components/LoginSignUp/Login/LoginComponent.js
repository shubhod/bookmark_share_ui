import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import { Form,Checkbox } from "antd";
import "./LoginStyles.scss"
import BasicFormBtn from "../../BasicForm/BasicFormBtnComponent";
import { useSigInSignUpContext } from "../../../screens/SignInSignUp/SignInSignUpContext";
import NotFound from "../../../shared/components/NotFound/NotFoundComponent";

const Login = () => {
  const isUserFound=useSigInSignUpContext();
  return (
    <BasicForm>
    <BasicFormBtn/>
      <div className="login-remember" >
      <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>         
      </div>

    </BasicForm>
  );
};

export default Login;
