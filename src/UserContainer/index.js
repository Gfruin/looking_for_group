import React, {Component} from 'react'
import EditUser from '../EditUser'

class UserContainer extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			matchedUsers: [],
			userToEdit: {
				_id: '',
				gamemaster: false,
				playerCharacter: true,
				lookingForGroup: true,
				gameMaterials: '',
				experience: null,
				description: '',
				firstName: '',
				lastName: '',
				password: '',
				username: {
					type: '',
					unique: true
				},
				email: {
					type: '',
					unique: true
				},
				location: {
					address: '',
					latitude: '',
					longitude: '',
					zipCode: ''
				},
				gamesystem: {
					dnd5e: false,
					pathfinder: false,
					starfinder: false,
					dnd3_5: false,
					callOfCthulu: false,
					other: '',
				},
				gamestyle: {
					roleplay: false,
					combat: false,
					dungeonCrawl: false,
					other: ''
				}


			},
			showUser: false,
			showEdit: true
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount(){
		// this.props.login(this.state.userToEdit.username, this.state.userToEdit.password, this.state.userToEdit.email)
		console.log(this.state);
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
			const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/' + this.state.userToEdit._id , {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(this.state.userToEdit),
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

	render() {
		return(
			<div>
				{this.state.showEdit? 
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