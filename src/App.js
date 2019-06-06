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
          {this.state.logged == false ? <Register login={this.login}/> : null }
          {this.state.logged == false ? <Login login={this.login}/> : null }
          <Logout logout={this.logout}/>
        </div>
      )
  }
}


export default App;
