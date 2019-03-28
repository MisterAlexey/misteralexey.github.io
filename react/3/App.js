import React, { Component } from 'react';
import './App.css';
import Login from './login' 
import Regist from './registr' 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeView: 'login'
    }
    this.changeView = this.changeView.bind(this)
  }

  // componentDidMount(){
  //   fetch('https://192.168.1.17:1337/login?login=qwe&password=123')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  changeView(e){
    this.setState({activeView: e.currentTarget.id})
  }

  render() {
    return (
      <div>
        {
          this.state.activeView === 'login'
          ?
          <Login go={this.changeView} />
          :
          <Regist go={this.changeView} />
        }
      </div>
    );
  }
}

export default App;