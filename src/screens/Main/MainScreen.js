import React from "react";
import SideBar from "../../components/SideBar/SideBarComponent";
import { Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Sider, Menu } from "antd";
import { SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ICONS } from "./constants";
export const MainScreenContext = React.createContext(null);

const MainScreen = () => {
  const onClickMenuItem = (event) => {
    console.log("clicked");
  };
  const menuProps = {
    menuItems: SIDEBAR_MENU_ITEMS,
    menuIcons: SIDE_BAR_MENU_ICONS,
    className:"mainScreenMenuItem",
    onClick: onClickMenuItem,
  };
  const InputFieldHandler=()=>{

  }
  return (
    <Layout>
      <SideBar
        menuProps={menuProps}
        siderClassName="mainScreenSideBar"
      />
    </Layout>
  );
};

export default MainScreen;
