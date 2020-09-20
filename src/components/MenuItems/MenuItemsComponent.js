import React from "react";
import { Menu } from "antd";
import "./MenuStyles.scss"
export const MenuItemsComponent=(props) => {
  let {menuIcons,menuItems,className,onClickMenuItem}=props;
  return menuItems.map((menuItem, index) => {
    return (
      <Menu.Item
        className={className?className:null}
        key={menuItem + index}
        icon={menuIcons[index]}
        onClick={() => {  
          onClickMenuItem();
        }}
      >
        {menuItem}
      </Menu.Item>
    );
  });
};


