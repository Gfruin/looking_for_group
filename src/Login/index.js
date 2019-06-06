import React, {Component} from 'react'

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
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
			const parsedResponse = await loginResponse.json()
			console.log(parsedResponse, 'here is the parsedResponse');
			this.props.login(this.state.email, this.state.password)
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
				<input type="text" name="email" onChange={this.handleChange}/>
				<input type="text" name="password" onChange={this.handleChange}/>
				<button>Login</button>
				</form>
			</div>
		)
	}
}


export default Login;