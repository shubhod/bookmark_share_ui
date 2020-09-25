import React from "react";
import SideBar from "../../components/SideBar/SideBarComponent";
import { SIDEBAR_MENU_ITEMS, SIDE_BAR_MENU_ICONS, MONTHS } from "./constants";
import { MainNavContext } from "./MainNavContext";
import { useDispatch } from "react-redux";
import { addNoteAction } from "./mainNavRedux/MainNavActions";
import { setNotesContent } from "../../helper/setNotesContent";
const MainNav = () => {
  console.log("main nav");
  const mainNavDispatch=useDispatch();
  const onClickAddNotes=(event)=>{
      let note=setNotesContent();
      mainNavDispatch(addNoteAction(note)); 
  };
  const onClickMenuItem=(event)=>{
    console.log("menuItemClicked");
  }

  const menuProps = {
    menuItems: SIDEBAR_MENU_ITEMS,
    menuIcons: SIDE_BAR_MENU_ICONS,
    className: "mainScreenMenuItem",
    onClickAddNotes: onClickAddNotes,
    onClickMenuItem:onClickMenuItem
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
