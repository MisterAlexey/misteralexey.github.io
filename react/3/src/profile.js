import React from 'react';


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           login: "",
           email: '',
           password: '',
           old_pass: '',
           new_pass0: '',
           new_pass1: '' 
        }
        this.onChange = this.onChange.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.exit = this.exit.bind(this)
      }
    componentDidMount(){
        var user = JSON.parse(localStorage.getItem('user'))
        this.setState({
            login: user.login,
            password: user.password,
            email: user.email
        })
    }
    onChange(e){
        const {name, value} = e.currentTarget
        this.setState({[name]: value})
    }
    changePassword(){
        if(this.state.password === this.state.old_pass){
            if(this.state.new_pass0 === this.state.new_pass1){
            fetch('https://wishlistvk.ml/change_password?login='+this.state.login+'&old_password='+this.state.old_pass+'&password='+this.state.new_pass0)
            .then(response => response.json())
            .then(data => {
                if(data.type === 'ok'){
                    var user = JSON.parse(localStorage.getItem('user'))
                    alert('Pass changed')
                    this.setState({
                        password: user.password,
                        old_pass: '',
                        new_pass0: '',
                        new_pass1: ''
                    })
                } else {
                    alert('Error')
                }
            })
            }else{
                alert('New passwords do not match')
            }
        } else{
            alert("Old pass is wrong")
        }
    }

    exit(){
        localStorage.removeItem('user')
        window.location.reload()
    }
    render(){
        return(
           <div>
               <h1>Привет, {this.state.login} </h1>
               <h1>User email -  {this.state.email} </h1>
               <input value={this.state.old_pass} onChange={this.onChange} name="old_pass" placeholder="Старый пароль" />
               <input value={this.state.new_pass0} onChange={this.onChange} name="new_pass0" placeholder="Новый пароль" />
               <input value={this.state.new_pass1} onChange={this.onChange} name="new_pass1" placeholder="Новый пароль" />
               <button onClick={this.changePassword}>Сменить пароль</button>
               <button onClick={this.exit}>Exit</button>

           </div>
        )
    }
}

export default Profile;