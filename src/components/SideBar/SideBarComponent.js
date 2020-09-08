import React from "react";
import Menu from "../Menu/MenuComponent";
import Sider from "antd/lib/layout/Sider";

const SideBar = (props) => {
  const {onclick,menuClassName, menuItems, menuIcons,sideClassName: siderClassName} = props;
  return (
    <Sider
      style={{ marginLeft: 210 }}
      className={siderClassName}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
      onClick={onclick}
      className={menuClassName}
      menuItems={menuItems}
      menuIcons={menuIcons}
      />
    </Sider>
  );
};

export default SideBar;
