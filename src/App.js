import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: '',
      email: '',
      password: '',
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
          <Login login={this.login}/>
          <Logout logout={this.logout}/>
          <Register login={this.login}/>
        </div>
        )
    }
  }
}

export default App;
