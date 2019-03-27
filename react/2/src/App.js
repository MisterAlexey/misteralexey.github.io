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
  finding(e){
    var value = e.currentTarget.value, users = json, new_users = [];
    for(var i =0; i<users.length; i++) {
      var first_name = users[i].first_name, last_name = users[i].last_name;
      first_name = first_name.toLowerCase();
      last_name = last_name.toLowerCase();
      if(first_name.indexOf(value) !== -1 || last_name.indexOf(value) !== -1){
        new_users.push(users[i])
      }
    }
    this.setState({
      users: new_users
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder='Type the name' onChange={this.finding} />
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