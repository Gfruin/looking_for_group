import React, {Component} from 'react'
import EditUser from '../EditUser'

class UserContainer extends Component {
	constructor(props) {
		super();
		this.state = {
			users: [],
			matchedUsers: [],
			userId: props.id,
			showUser: false,
			showEdit: true,
			userToEdit: {
				_id: props.id,
				gamemaster: props.state.gamemaster,
				playerCharacter: props.state.playerCharacter,
				lookingForGroup: props.state.lookingForGroup,
				gameMaterials: props.state.gameMaterials,
				experience: props.state.experience,
				description: props.state.description,
				firstName: props.state.firstName,
				lastName: props.state.lastName,
				address: props.state.address,
				latitude: props.state.latitude,
				longitude: props.state.longitude,
				zipCode: props.state.zipCode,
				dnd5e: props.state.dnd5e,
				pathfinder: props.state.pathfinder,
				starfinder: props.state.starfinder,
				dnd3_5: props.state.dnd3_5,
				callOfCthulu: props.state.callOfCthulu,
				other: props.state.other,
				roleplay: props.state.roleplay,
				combat: props.state.combat,
				dungeonCrawl: props.state.dungeonCrawl,
				other: props.state.other
			},
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount(){
		// this.setUserToEdit()
		console.log(this.state, 'here is state in UserContainer');
		console.log(this.props, 'here is props in UserContainer');
		if(this.showEdit === false) {
			this.props.showEdit()
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
		const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/match') 
			if(userResponse.status !== 200) {
				throw Error(userResponse.statusText)
			}
			const foundUsers = await userResponse.json()
			this.setState({matchedUsers: foundUsers.data})
			console.log(this.state.matchedUsers, 'here are the matched users');
	}

	closeAndEdit = async (e) => {
		e.preventDefault()
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

		} catch(err){
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
			userToEdit: user
		})
	}
	// showEdit = (user) => {
	// 	this.setState({
	// 		showEdit: true
	// 	})
	// }

	render() {
		console.log(this.state, 'here is the state in UserContainer');
		console.log(this.state.showEdit, 'here is the this.state.showEdit in UserContainer');
		return(
			<div>
				{this.state.showEdit === true ? 
					<EditUser
					closeAndEdit={this.closeAndEdit}
					handleInputChange={this.handleInputChange}
					handleFormChange={this.handleFormChange}
					/>
				: null}
			</div>



			)
	}
}


export default UserContainer;