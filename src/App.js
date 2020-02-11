import React from 'react'
import './App.css';
import 'antd/dist/antd.css'
import Header from './Header.js'
import UserTable from './UserTable.js'

class App extends React.Component  {
  state={

  }

  render(){
    return (
      <div className="App">
        <Header />
        <div 
          style={{
            margin: 20
          }}
        >
          <div
            style={{
              margin: 20,
              fontSize: 20,
              fontWeight: 600
            }}
          >Users</div>
        <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
