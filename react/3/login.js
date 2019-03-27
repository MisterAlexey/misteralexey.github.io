import React from 'react';


class Login extends React.Component{
    render(){
        return(
            <div className="login_data">
            <h1>Enter login and password</h1>
            <br />
            <input className="login" placeholder="Enter login" type="text"/>
            <br />
            <input className="password" placeholder="Enter password" type="password"/> 
            <br />   
            <button className='Go_enter'>Enter</button>
            </div>
        )
    }
}

export default Login;