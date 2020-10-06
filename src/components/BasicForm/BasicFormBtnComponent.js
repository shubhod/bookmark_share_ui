import React from "react";
import {Form,Button} from 'antd';
import { useSigInSignUpContext } from "../../screens/SignInSignUp/SignInSignUpContext";
const BasicFormBtn = () => {
  const {onClickContinue}=useSigInSignUpContext();
  return (
    <Form.Item>
      <Button block htmlType="submit" className="btn-login" onClick={(event) => {onClickContinue(event)}}>
        Log in
      </Button>
    </Form.Item>
  );
};

export default BasicFormBtn;
