import React, {Component} from 'react'


class UserContainer extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			matchedUsers: [],
			userToEdit: {
				id: null,
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
				},
				showUser: false,

			}
		}
	}

	componentDidMount(){

	}
	getAllUsers = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user',{
				if(response.status !== 200) {
					throw Error(response.statusText)
				}
				const usersParsed = await response.json()
				this.setState({users: usersParsed.data})
				console.log(this.state.users, 'here are the users on the getAllUsers');
			})
		} catch(err) {
			console.log(err);
		}
	}

	getUsersByCat = async () => {
		const userResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/match', {
			if(response.status !== 200) {
				throw Error(response.statusText)
			}
			const foundUsers = await userResponse.json()
			this.setState({matchedUsers: foundUsers.data})
			console.log(this.state.matchedUsers, 'here are the matched users');
		})
	}

	closeAndEdit = async () => {
		e.preventDefault()
		try{
			const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/' + this.state.userToEdit.id, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify(this.state.userToEdit),
				headers: {
					'Content-type': 'application/json'
				}
			})
			const parsedResponse = await editResponse.json();
			const editedUserArray = this.state.users.map((user) => {
				if(user.id === this.state.userToEdit.id) {
					user = parsedResponse.data
				}
				return user
			})
			this.setState({
				users: editedUserArray,
				showUser: false
			})

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
			
			</div>



			)
	}
}