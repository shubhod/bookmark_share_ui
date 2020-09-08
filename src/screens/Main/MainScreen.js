import React from "react";
import SideBar from "../../components/SideBar/SideBarComponent";
import { Layout } from "antd";
import { SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ICONS } from "./constants";
export const MenuContext = React.createContext(null);

const MainScreen = () => {
  const onClick = (event) => {
    console.log("clicked");
  };
  return (
    <Layout>
      <MenuContext.Provider
        value={{
          menuItems: SIDEBAR_MENU_ITEMS,
          menuIcons: SIDE_BAR_MENU_ICONS,
          onClick: onclick,
        }}
      >
        <SideBar menuItems={SIDEBAR_MENU_ITEMS} menuIcons={SIDE_BAR_MENU_ICONS} siderClassName="MainScreenSideBar" menuClassName={null} />
      </MenuContext.Provider>
    </Layout>
  );
};

export default MainScreen;
