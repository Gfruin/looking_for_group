import React, {Component} from 'react'


class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			username: '',
			_id: ''
			
		}
	}
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/login', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-type' : 'application/json'
				}
			})
			console.log(loginResponse, 'here is the loginResponse');
			const parsedResponse = await loginResponse.json()
			console.log(parsedResponse, 'here is the parsedResponse');
			if(loginResponse.status != 500) {
				this.props.login(parsedResponse.data)

			} 
			// this.props.setUserToEdit(parsedResponse.data)
			console.log('is this working?');
			// console.log(this.props.setUserToEdit(parsedResponse.data), 'here is the props of setUserToEdit in Login');
		} catch(err) {
			console.log(err);
		}
	}
	render() {
		return(
			<div>
				<h3>Login</h3>
				<form onSubmit={this.handleSubmit}>
				Email:
				<input type="text" name="email" onChange={this.handleChange}/> <br/> <br/>
				Password:
				<input type="password" name="password" onChange={this.handleChange}/> <br/> <br/>
				<button>Login</button>
				</form>
			</div>
		)
	}
}


export default Login;