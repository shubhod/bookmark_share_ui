import React from 'react'
function SideBar() {
    return (
        <Sider style={{ marginLeft: 210 }} className="AllNotes_Sider">
        <div className="logo" />
        <Menu theme="dark" mode="inline" selectable={false}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
    )
}

export default SideBar
