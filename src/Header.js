import React from 'react'
import { Menu, DatePicker } from 'antd'

function Header(props){
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