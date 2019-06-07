import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Login from './Login'
import Logout from './Logout'
import UserContainer from './UserContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      username: '',
      email: '',
      password: '',
      _id: ''
    }
  }
  componentDidMount() {
    console.log(this.state);
  }
    login = (email, username, password, _id) => {
      this.setState({
        logged: true,
        email: email,
        username: username,
        password: password,
        _id: _id,
      })
    }

    setUserToEdit = (email,username,password,_id) => {
      this.setState({
      "userToEdit._id": _id,
      "userToEdit.username": username,
      "userToEdit.password": password,
      "userToEdit.email": email,
      })
    }
    logout = (email) => {
      this.setState({
        logged: false,
        email: email
      })
    }
    render() {
      console.log(this.state);
      return (
        <div className="App">
          {this.state.logged === false ? <Register login={this.login}/> : null }
          {this.state.logged === false ? <Login login={this.login} setUserToEdit={this.setUserToEdit}/> : null }
          <Logout logout={this.logout}/>
          {this.state.logged === true ? <UserContainer login={this.login} username={this.state.username} password={this.state.password} email={this.state.email}/> : null }
        </div>
      )
  }
}


export default App;
