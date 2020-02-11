import React  from 'react'
import { Table } from 'antd'
export default function UserTable() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];
    return (
      <div>
        <Table columns={columns}/>
      </div>
    )
}
