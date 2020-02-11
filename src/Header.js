import React from 'react'
import { Menu } from 'antd'

function Header(){
  return (
    <div>
      <Menu 
        defaultSelectedKeys={['users']}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="users">Users</Menu.Item>
        <Menu.Item key="rankings">Rankings</Menu.Item>
      </Menu>
    </div>
  )
}

export default Header