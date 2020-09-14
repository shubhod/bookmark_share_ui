import React from "react";
import SideBar from "../../components/SideBar/SideBarComponent";
import { SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ICONS } from "./constants";
export const MainScreenContext = React.createContext(null);

const MainNavSideBar = () => {
  const onClickMenuItem = (event) => {
    console.log("clicked");
  };
  const menuProps = {
    menuItems: SIDEBAR_MENU_ITEMS,
    menuIcons: SIDE_BAR_MENU_ICONS,
    className: "mainScreenMenuItem",
    onClick: onClickMenuItem,
  };
  const InputFieldHandler = () => {};
  return <SideBar menuProps={menuProps} />;
};

export default MainNavSideBar;
