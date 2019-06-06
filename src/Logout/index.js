import React, {Component} from 'react'


class Logout extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const logoutResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/logout', {
				method: 'GET',
				credentials: 'include'
			})
			console.log(logoutResponse, 'here is the logoutResponse');


		} catch(err){
			console.log(err);
		}
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
			<button>Logout!</button>
			</form>


			)
	}
}

export default Logout;