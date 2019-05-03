import React from 'react'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        window.localStorage.setItem('username', this.state.username)
        window.location.reload();

    }

    handleInputChange = (event) => {
        console.log('CHANGING INPUT');
        this.setState( {[event.target.name]: event.target.value});  //note: brackets for dynamic key name
    }

    render() {
        return(
            <form className="login" onSubmit={this.handleLoginSubmit}>
                username : <input 
                name='username' 
                value={this.state.username} 
                onChange = {this.handleInputChange}  
                /> <br/>

                password : <input 
                name='password' 
                value={this.state.password}
                onChange = {this.handleInputChange}  
                /> <br/>
                
                <button type='submit'>Login</button>
            </form>
        )
    }

    
}

export default Login;