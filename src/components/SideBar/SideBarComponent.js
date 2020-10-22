import React from "react";
import Sider from "antd/lib/layout/Sider";
import "./SideBarStyles.scss";
import SideBarHeader from "./SideBarHeaderComponent";
import SideBarContent from "./SideBarContentComponent";
const SideBar = (props) => {
  // const [sideBarMinWidth, setSideBarMinWidth] = useState("mainScreenSideBar sideBarMinWidth");
  // const [collapsed, setCollapse] = useState(false);
  // const onCollapse = (collapsed) => {
  //   setCollapse(collapsed);
  // };

  return (
    <div className="mainScreenSideBar">
    <Sider className="mainScreenSideBar_body" >
      <SideBarHeader />
      <SideBarContent />
    </Sider>
    </div>
  );
};

export default SideBar;
