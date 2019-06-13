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
      userData: null,
      logged: false,
      username: '',
      email: '',
      password: '',
      _id: '',
      showEdit: false
    }
  }
  componentDidMount() {
    console.log(this.state);
    this.showEdit()
  }
  login = (user, e) => {
      console.log(user, 'here is the user in the login function of App.js');

      this.setState({
        userData: user,
        username: user.username,
        email: user.email,
        _id: user._id,
        logged: true, 
        registered: true
      })

      // this.setState({
      //   username: user.username,
      //   email: user.email,
      //   _id: user._id,
      //   logged: true, 
      //   registered: true,
      //   // _id: user,
      //   gamemaster: user.gamemaster,
      //   playerCharacter: user.playerCharacter,
      //   lookingForGroup: user.lookingForGroup,
      //   gameMaterials: user.gameMaterials,
      //   experience: user.experience,
      //   description: user.description,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   address: user.location.address,
      //   latitude: user.location.latitude,
      //   longitude: user.location.longitude,
      //   zipCode: user.location.zipCode,
      //   dnd5e: user.gamesystem.dnd5e,
      //   pathfinder: user.gamesystem.pathfinder,
      //   starfinder: user.gamesystem.starfinder,
      //   dnd3_5: user.gamesystem.dnd3_5,
      //   callOfCthulu: user.gamesystem.callOfCthulu,
      //   other: user.gamesystem.other,
      //   roleplay: user.gamestyle.roleplay,
      //   combat: user.gamestyle.combat,
      //   dungeonCrawl: user.gamestyle.dungeonCrawl,
      //   other: user.gamestyle.other,
      // })
      console.log(this.state.logged, 'here is this.state.logged after login');
    }

   
    logout = (email) => {
      this.setState({
        logged: false,
        email: email
      })
    }

    showEdit = () => {
      this.setState({
        showEdit: true

      })
      console.log("showEdit fired! in App.js");
      console.log(this.state.showEdit, "here is teh showEdit in App.js");
      console.log(this.state.logged, "here is the this.state.logged in App.js");
    }
    render() {
      console.log(this.state);
      console.log(this.state.userToEdit, 'here is this.state.userToEdit');
      return (
        <div className="App">
          <h2 className="App-header"></h2>
          <h1>Welcome to LookingForGroup!</h1>
          <p> Hello and Welcome to LookingForGroup! If you're using this site now, then I'm sure you've run into the common problem of finding a group to play TableTop Roleplaying games with
           This site is designed to aid you in your plans to find players or game masters! Good luck, and Happy Adventuring!</p>
          <Logout logout={this.logout}/>
          {this.state.logged === false ? <Register userData={this.state.userData} login={this.login} showEdit={this.showEdit} stateshowEdit={this.state.showEdit}/> : null }
          <br/>
          {this.state.logged === false ? <Login userData={this.state.userData} login={this.login} /> : null }
          <br/>
          {this.state.logged === true ? <UserContainer userData={this.state.userData} id={this.state._id} login={this.login} state={this.state} showEdit={this.showEdit} stateshowEdit={this.state.stateshowEdit} logout={this.logout} /> : null }
        </div>
      )
  }
}


export default App;
