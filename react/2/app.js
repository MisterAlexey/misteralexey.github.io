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
    var array = this.state.users;
    array.splice(e.currentTarget.id, 1);
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
              first_name={users.first_name}  
              last_name={users.last_name}
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