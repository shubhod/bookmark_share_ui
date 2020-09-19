import React from 'react'
import { Space } from 'antd'

const SideBarHeader=() => {
    return (
        <Space>
        <img
          className="mainScreenSideBar_img_logo"
          src="/images/mainScreen/logo.png"
          alt=""
        />
        <span className="mainScreenSideBar_logo_heading">FlashNotes</span>
      </Space>
    )
}

export default SideBarHeader