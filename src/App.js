import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Login from './Login'
import Logout from './Logout'


class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: '',
      email: '',
      password: '',
    }
  }
    login = (email) => {
      this.setState({
        logged: true,
        email: email
      })
    }
    logout = (email) => {
      this.setState({
        logged: false,
        email: email
      })
    }
    render() {
      return (
        <div className="App">
          <Register login={this.login}/>
        </div>
      )
  }
}


export default App;
