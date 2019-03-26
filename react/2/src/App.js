import React, { Component } from 'react';
import './App.css';
// import Card from './Card'
import Card from './Card'
import json from './json.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: json,
      random_user: null
    }
    this.delete_card = this.delete_card.bind(this)
    this.cancel =  this.cancel.bind(this)
    this.finding =  this.finding.bind(this)
  }

  delete_card(e){

    var rand = Math.floor(Math.random() * ((this.state.users.length-1) - 0))
    this.setState({
      random_user:
      <div>
        <p>{this.state.users[rand].last_name+" "+this.state.users[rand].first_name}</p>
      </div>
    })
     
  }
  cancel(){
    this.setState({random_user: null})
  }
  finding(){
    var length = this.state.users.length
    for(var i = 0; i < this.state.users.length; i++) {
      for (var i = 0; i < this.state.users.length; i++) {
        $('ul > li').eq(i).show()
      }
    var index = [];
    for (var i = 0; i < this.state.users.length; i++) {
      var name = this.state.users[i].toLowerCase(),
          value = $('input').val()
      if(this.state.users.indexOf(value.toLowerCase()) == -1){
        index.push(i)
      }
      if(i == this.state.users.length-1){
        for (var j = 0; j < index.length; j++) {
          $('ul > li').eq([index[j]]).hide()
        }
      }
    }
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder='Type the name' onKeyUp={this.finding} />
        {
          !this.state.random_user ?
          this.state.users && this.state.users.map((user, i) => 
            <Card 
              first_name={user.first_name}  
              last_name={user.last_name}
              delete_card={this.delete_card}
              id={i}
            />
          ) 
          :
          <div>
            {this.state.random_user}
            <button onClick={this.cancel}>Cancel</button>
          </div>
        }
      </div>
    );
  }
}

export default App;