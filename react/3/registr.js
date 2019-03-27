import React from 'react';


class Regist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           login: "",
           password: '',
           email: '' 
        }
        this.checking =  this.checking.bind(this)
      }
    onChange(e){
        var {name, value} = e.currentarget;
        this.setState({[name]: value})
    }
    checking (){
        console.log(this.state.login, this.state.password, this.state.email)
    }
    render(){
        return(
            <div className="login_data">
            <h1>Enter your Data</h1>
            <br />
            <input name="login" placeholder="Enter login" type="text" onChange={this.onChange}/>
            <br />
            <input name="email" placeholder="Enter email" type="text" onChange={this.onChange}/>
            <br />
            {/* <input name="password" placeholder="Enter password" type="password" onChange={this.onChange}/> 
            <br />  */}
            <input name="password" placeholder="Reply password" type="password" onChange={this.onChange}/> 
            <br />  
            <button name='Registration' onClick={this.checking}>Enter</button>
            </div>
        )
    }
}

export default Regist;