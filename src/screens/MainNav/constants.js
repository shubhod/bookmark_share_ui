import React from "react";
import {
  CopyOutlined,
  BookOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
export const SIDEBAR_MENU_ITEMS = [
  "all Notes",
  "notebooks",
  "Shared with me",
  "Trash",
];
const iconStyle={fontSize: '20px'};
export const SIDE_BAR_MENU_ICONS = [
  <CopyOutlined style={iconStyle}/>,
  <BookOutlined style={iconStyle}/>,
  <UsergroupAddOutlined style={iconStyle}/>,
  <DeleteOutlined style={iconStyle}/>,
];

