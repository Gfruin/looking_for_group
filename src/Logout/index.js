import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';


class Logout extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			logged: true
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
			this.props.logout(this.state.email, this.state.password, this.state.logged)
			console.log(this.state.logged);

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