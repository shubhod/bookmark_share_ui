import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import "./SignUpnStyles.scss";
import { Form, Input, Button } from "antd";
import { MobileOutlined,LockOutlined} from "@ant-design/icons";
import BasicFormBtn from "../../BasicForm/BasicFormBtnComponent";
const SignUp = () => {
  const MSG_PASSWORD_REQUIRED="confirm password required ";
  return (
    <>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: MSG_PASSWORD_REQUIRED,
          },
        ]}
      >
        <Input
          // ref={passwordRef}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm  password"
        />
      </Form.Item>
      <Form.Item
        name="mobileNo"
        rules={[
          {
            required: true,
            message: "Please input your mobileNo!",
          },
        ]}
      >
        <Input
          prefix={<MobileOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="mobileNo"
        />
      </Form.Item>
      <BasicFormBtn />
      <div className="form-agreement">
        By creating an account, you are agreeing to our Terms of Service and
        Privacy Policy.
      </div>
    </>
  );
};

export default SignUp;
