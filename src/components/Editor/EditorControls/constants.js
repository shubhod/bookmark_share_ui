import React from 'react'
import {FontSizeOutlined,AlignRightOutlined,AlignLeftOutlined,ItalicOutlined,BoldOutlined,FontColorsOutlined,UnderlineOutlined,AlignCenterOutlined} from '@ant-design/icons';

/*ViewEditorControl*/
export const CONTROL_NAME_LIST = [
  <FontSizeOutlined/>,
  <AlignRightOutlined/>,
  <AlignCenterOutlined/>,
  <AlignLeftOutlined/>,
  <ItalicOutlined/>,
  <BoldOutlined/>,
  <FontColorsOutlined/>,
  <UnderlineOutlined/>,
];

export const CONTROL_NAME_MAPS={
  "justifyRight":<AlignRightOutlined/>,
  "justifyCenter":<AlignCenterOutlined/>,
  "justifyLeft":<AlignLeftOutlined/>,
  "italic":<ItalicOutlined/>,
  "bold":<BoldOutlined/>,
  "backColor":<FontColorsOutlined/>,
  "underline":<UnderlineOutlined/>,
  "image":null
};
export const CONTROL_NAME_MAP={
    "AlignRightOutlined":"justifyRight",
    "AlignCenterOutlined":"justifyCenter",
    "AlignLeftOutlined":"justifyLeft",
    "ItalicOutlined":"italic",
    "BoldOutlined":"bold",
    "FontColorsOutlined":"backColor",
    "UnderlineOutlined":"underline",
    "image":null
};




export const FONT_FAMILY = ["Alata","Open Sans","Roboto","Roboto Mono"];
