import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import json from './json.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: json
    }
    this.delete_card = this.delete_card.bind(this)
  }

//   componentDidMount(){
//     fetch(json.json)
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         users: data
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }

  delete_card(e){
    console.log(e.currentTarget.id)
    console.log(this.state.users.length)
    var length = this.state.users.length
    var array = this.state.users;
    // for (var i = 1; i < length; i++) {
    //   array.splice(e.currentTarget.id+1, 1);
    //   this.setState({
    //   users: array
    //   })
      
    // }
      array.splice(e.currentTarget.id++, length--);
      this.setState({
      users: array
      })
  }

  render() {
    return (
      <div className="App">
        
        {
          this.state.users && this.state.users.map((user, i) => 
            <Card 
              first_name={user.first_name}  
              last_name={user.last_name}
              delete_card={this.delete_card}
              id={i}
            />
          )
        }
      </div>
    );
  }
}

export default App;