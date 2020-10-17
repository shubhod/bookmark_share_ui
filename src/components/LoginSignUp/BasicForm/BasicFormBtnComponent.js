import React from "react";
import {Form,Button} from 'antd';
const BasicFormBtn = ({onClick}) => {
  return (
    <Form.Item>
      <Button block htmlType="submit" className="btn-login" onClick={onClick}>
        Log in
    </Button>
    </Form.Item>
  );
};

export default BasicFormBtn;
