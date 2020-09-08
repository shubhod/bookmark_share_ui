import React, { useContext } from "react";
import { Menu } from "antd";
import { MenuContext } from "../../screens/Main/MainScreen";
const menuItems=()=>{
  return menuItems.map((menuItem, index) => {
    return (
      <Menu.Item
        key={menuItem + index}
        icon={menuIcons[index]}
        className={className}
        onClick={(event) => {
          onClick(event);
        }}
      />
    );
  });
}
const MenuComponent = (props) => {
  // const { onClick, className, menuItems, menuIcons } = useContext(MenuContext);
  let { onClick, className, menuItems, menuIcons }=props;

};

export default MenuComponent;
