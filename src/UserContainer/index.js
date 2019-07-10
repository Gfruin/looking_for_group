import React, {Component} from 'react'
import EditUser from '../EditUser'
import UserProfile from '../UserProfile'
import MatchedUsersContainer from '../MatchedUsersContainer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class UserContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			users: [],
			matchedUsers: [],
			currentUser: [],
			userId: props.id,
			showUser: false,
			showEdit: false,
			showMatches: false,
			userToEdit:
				{
				_id: props.id,
				gamemaster: props.userData.gamemaster,
				playerCharacter: props.userData.playerCharacter,
				lookingForGroup: props.userData.lookingForGroup,
				gameMaterials: props.userData.gameMaterials,
				experience: props.userData.experience,
				description: props.userData.description,
				firstName: props.userData.firstName,
				lastName: props.userData.lastName,
				address: props.userData.address,
				latitude: props.userData.latitude,
				longitude: props.userData.longitude,
				zipCode: props.userData.zipCode,
				dnd5e: props.userData.gamesystem.dnd5e,
				pathfinder: props.userData.gamesystem.pathfinder,
				starfinder: props.userData.gamesystem.starfinder,
				dnd3_5: props.userData.gamesystem.dnd3_5,
				callOfCthulu: props.userData.gamesystem.callOfCthulu,
				other: props.userData.gamesystem.other,
				roleplay: props.userData.gamestyle.roleplay,
				combat: props.userData.gamestyle.combat,
				dungeonCrawl: props.userData.gamestyle.dungeonCrawl,
				other: props.userData.gamestyle.other
			}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount(){
		// this.setUserToEdit()
		console.log(this.state, 'here is state in UserContainer');
		console.log(this.props, 'here is props in UserContainer');
		console.log(this.state.showEdit, 'here is the showEdit state in UserContainer');
		if(this.state.showEdit === false && this.state.showUser !== true) {
			this.showEdit()
			console.log('this.showEdit has fired! in UserContainer');
		}
	}
	getAllUsers = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user')
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				const usersParsed = await response.json()
				this.setState({users: usersParsed.data})
				console.log(this.state.users, 'here are the users on the getAllUsers');
			
		} catch(err) {
			console.log(err);
		}
	}

	getUsersByCat = async () => {
		console.log('here is the getUsersByCat');
		try{
			const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/match/', {
				credentials: 'include'
			}) 
				if(userResponse.status !== 200) {
					throw Error(userResponse.statusText)
				}
			const foundUsers = await userResponse.json()
			console.log(foundUsers.data,'foundUsers.data in the getUsersByCat');
			this.setState({
				matchedUsers: foundUsers.data,
			
			})
			console.log(this.state.matchedUsers, 'here are the matched users');
			console.log('getUsersByCat has fired!');
			this.setState({
				showUser:false,
				showEdit: false,
				showMatches: true
			})
		} catch(err){
			console.log(err);
		}
	}

	// getUserProfile = async () => {
	// 	try{
	// 		const userProfileResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/' + this.state.userId, {
	// 			method: 'GET',
	// 			credentials: 'include'
	// 		})
	// 		if(userProfileResponse.status !== 200) {
	// 			throw Error(userProfileResponse.statusText)
	// 		}
	// 		const foundUserProfile = await userProfileResponse.json()
	// 		this.setState({currentUser: foundUserProfile.data})
	// 		console.log(this.state.currentUser, 'here is the currentUser in UserContainer');
	// 		// this.showUser()
	// 		console.log(this.state.showUser, 'here is the current showUser state');
	// 		} catch(err){
	// 			console.log(err);
	// 		}
	// 	}

	closeAndEdit = async (e) => {
		e.preventDefault()
		console.log("hitting the closeAndEdit");
		try{
			this.state.userToEdit.zipCode = parseInt(this.state.userToEdit.zipCode)
			const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/' + this.state.userId , {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify({
					gamemaster: this.state.userToEdit.gamemaster,
					playerCharacter: this.state.userToEdit.playerCharacter,
					lookingForGroup: this.state.userToEdit.lookingForGroup,
					gameMaterials: this.state.userToEdit.gameMaterials,
					experience: this.state.userToEdit.experience,
					description: this.state.userToEdit.description,
					firstName: this.state.userToEdit.firstName,
					lastName: this.state.userToEdit.lastName,
					location: {
						address: this.state.userToEdit.address,
						latitude: this.state.userToEdit.latitude,
						longitude: this.state.userToEdit.longitude,
						zipCode: this.state.userToEdit.zipCode
					},
					gamesystem: {
						dnd5e: this.state.userToEdit.dnd5e,
						pathfinder: this.state.userToEdit.pathfinder,
						starfinder: this.state.userToEdit.starfinder,
						dnd3_5: this.state.userToEdit.dnd3_5,
						callOfCthulu: this.state.userToEdit.callOfCthulu,
						other: this.state.userToEdit.other
					},
					gamestyle: {
						roleplay: this.state.userToEdit.roleplay,
						combat: this.state.userToEdit.combat,
						dungeonCrawl: this.state.userToEdit.dungeonCrawl,
						other: this.state.userToEdit.other
					}
				}),
				headers: {
					'Content-type': 'application/json'
				}
			})
			console.log(editResponse);
			const parsedResponse = await editResponse.json();
			console.log(parsedResponse);
			const editedUserArray = this.state.users.map((user) => {
				if(user._id === this.state.userToEdit._id) {
					user = parsedResponse.data
					console.log(editedUserArray);
				}
				return user
			})
			this.setState({
				users: editedUserArray,
				showUser: false
			})
			console.log(this.state);
			// this.getUserProfile()

		} catch(err){
			console.log(err);
		}
	}

	deleteUser = async (id, props, e) => {
		// e.preventDefault()
		try {
			const deleteUser = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/' + this.state.userId, {
				method: 'DELETE',
				credentials: 'include'
			});
			console.log('here is teh deleteUser');
			const deleteUserJson = await deleteUser.json()
			this.props.logout()
			// this.setState({userToEdit: this.state.userToEdit.filter((userToEdit, i) => userToEdit._id !== this.state.userId)})
		} catch(err) {
			console.log(err);
		}
	}
	handleFormChange = (e) => {
		this.setState({
			userToEdit: {
				...this.state.userToEdit,
				[e.target.name]: e.target.value
			}
		})
		console.log(this.userToEdit);
	}
	handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   	// let gamesystem = {...this.state.gamesystem}
	// gamesystem.dnd5e = true;
	// this.setState({gamesystem})

    	this.setState({
    		userToEdit: {
    			...this.state.userToEdit,
      			[name]: value
    		}
    	});
	}

	showUser = (user) => {
		console.log(user, '<-----here is the showUser');
		this.setState({
			showUser: true,
			userToEdit: user,
			showEdit: false
		})
	}
	showEdit = (user) => {
		this.setState({
			showEdit: true
		})
	}

	render() {
		// console.log(this.state, 'here is the state in UserContainer');
		// console.log(this.state.showEdit, 'here is the this.state.showEdit in UserContainer');
		// console.log(this.state.userToEdit, 'here is the userToEdit in UserContainer');
		return(
			<div>
				<Button variant="outline-danger" onClick={this.getUsersByCat}>Search!</Button>
				{this.state.showMatches === true ? 
					<MatchedUsersContainer
					matchedUsers={this.state.matchedUsers}
					/>
					:null}
					<br/>
				{this.state.showEdit === true ? 
					<EditUser
					userToEdit={this.state.userToEdit}
					closeAndEdit={this.closeAndEdit}
					handleInputChange={this.handleInputChange}
					handleFormChange={this.handleFormChange}
					getUsersByCat={this.getUsersByCat}
					currentUser={this.state.currentUser}
					// showUser={this.showUser}
					deleteUser={this.deleteUser}
					/>
				: null}
				{this.state.showUser === true ?
					<UserProfile
					currentUser={this.state.currentUser}/> 
				: null}
			</div>

		)
	}
}


export default UserContainer;