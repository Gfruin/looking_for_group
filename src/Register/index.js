import React, {Component} from 'react';

class Register extends Component {
	constructor(){
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
			registered: false
		}
	handleChange = (e) => {
		e.preventDefault()
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		return(
			<form>
			Email:
			<input type="text" name="email"/>
			Username:
			<input type="text" name="username"/>
			Password:
			<input type="password" name="password"/>
			<button>Submit</button>
			</form>

			)
	}
	}
}