import React, { Component } from 'react';
import './App.css';
import Login from './login' 
import Regist from './registr' 
import Profile from './profile'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeView: 'login',
      activePanel: localStorage.getItem('user') ? <Profile /> : <Login go={this.go.bind(this)} />
    }
    this.go = this.go.bind(this)
  }

  go(component){
    switch(component){
      case 'reg':
      this.setState({activePanel: <Regist go={this.go} />})
      break;
      case 'login':
      this.setState({activePanel: <Login go={this.go} />})
      break;
      case 'profile':
      this.setState({activePanel: <Profile go={this.go} />})
      break;
      default:
      break;
    }
  }

  // changeView(e){
  //   this.setState({activeView: e.currentTarget.id})
  // }

  render() {
    return (
      <div>
        {
          this.state.activePanel
        }
      </div>
    );
  }
}

export default App;