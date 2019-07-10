import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
			
			<Form onSubmit={this.handleSubmit}>
			  <Button variant="outline-danger" type="submit">
			    LogOut
			  </Button>
			</Form>

			)
	}
}

export default Logout;