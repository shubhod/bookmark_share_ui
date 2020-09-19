import React from "react";
import SideBar from "../../components/SideBar/SideBarComponent";
import { SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ICONS } from "./constants";
import { MainNavContext } from "./MainNavContext";
import { useDispatch } from "react-redux";
import { addNote } from "./mainNavRedux/MainNavActions";
import { ADD_NOTES } from "./mainNavRedux/MainNavActionTypes";
const MainNav = () => {
  const dispatch=useDispatch();
  const onClickMenuItem=(event)=>{
      dispatch(addNote({header:"untiled",content:"erererser",footer:"sep 19"})); 
  };
  const menuProps = {
    menuItems: SIDEBAR_MENU_ITEMS,
    menuIcons: SIDE_BAR_MENU_ICONS,
    className: "mainScreenMenuItem",
    onClick: onClickMenuItem,
  };
  // const InputFieldHandler = () => {};
  return (
    <>
      <MainNavContext.Provider value={{menuProps}}>
      <SideBar menuProps={menuProps} />
      </MainNavContext.Provider>
    </>
  );
};

export default MainNav;
