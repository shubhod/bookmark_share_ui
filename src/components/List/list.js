import React from "react";
import "./list.scss";
import { List, Avatar } from "antd";
const data = [
  {
    title: "Ant Design Title 1",
    name: "shubho",
  },
  {
    title: "Ant Design Title 2",
    name: "deep",
  },
  {
    title: "Ant Design Title 3",
    name: "paul",
  },
  {
    title: "Ant Design Title 4",
    name: "rohan",
  },
];

const ListCustom = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <div className="ant-list-item__heading">heading</div>
          <div className="ant-list-item__content">content</div>
          <div className="ant-list-item__footer">footer</div>
        </List.Item>
      )}
    />
  );
};

export default ListCustom;
