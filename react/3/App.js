import React, { Component } from 'react';
import './App.css';
import Login from './login' 
import Regist from './registr' 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }

  }



  render() {
    return (
      <div>
        <Login />
        <Regist />
      </div>
      
    );
  }
}

export default App;