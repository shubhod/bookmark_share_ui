import React from "react";
import {
  AlignRightOutlined,
  AlignLeftOutlined,
  ItalicOutlined,
  BoldOutlined,
  FontColorsOutlined,
  UnderlineOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";

/*ViewEditorControl*/
export const EDITOR_MENU_ICONS = {
  justifyRight: <AlignRightOutlined />,
  justifyCenter: <AlignCenterOutlined />,
  justifyLeft: <AlignLeftOutlined />,
  italic: <ItalicOutlined />,
  bold: <BoldOutlined />,
  backColor: <FontColorsOutlined />,
  underline: <UnderlineOutlined />,
  image: null,
};

export const FONT_FAMILY = ["Alata", "Open Sans", "Roboto", "Roboto Mono"];
