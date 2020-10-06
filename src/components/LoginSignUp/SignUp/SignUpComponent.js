import React from "react";
import BasicForm from "../../BasicForm/BasicFormComponent";
import "./SignUpnStyles.scss";
import { Form, Input,Button } from "antd";
import {MobileOutlined} from "@ant-design/icons";
import BasicFormBtn from "../../BasicForm/BasicFormBtnComponent";
const SignUp = () => {
  console.log("SiginUp");
  return (
    <BasicForm>
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
          // ref={passwordRef}
          prefix={<MobileOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="mobileNo"
        />
      </Form.Item>
        <BasicFormBtn/>
      <div className="form-agreement">
        By creating an account, you are agreeing to our Terms of Service and
        Privacy Policy.
      </div>
    </BasicForm>
  );
};

export default SignUp;
