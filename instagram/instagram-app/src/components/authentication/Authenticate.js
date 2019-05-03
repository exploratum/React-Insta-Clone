import React from 'react'
import Login from '../login/Login'

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            window.localStorage.getItem('username') ?
                this.setState({loggedIn:true}) : this.setState({loggedIn:false})
        };

        render() {
            if (this.state.loggedIn)
                return(<App/>)
            else 
                return(<Login />)          
        };
    }


export default Authenticate;