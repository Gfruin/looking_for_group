import React, {Component} from 'react';

class Register extends Component {
	constructor(){
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
			registered: false,
			showEdit: false
		}
	}
	handleChange = async (e) => {
		e.preventDefault()
		this.setState({[e.target.name]: e.target.value})
		console.log(this.state);
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/register', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-type': 'application/json'
				}
			})
			const parsedResponse = await registerResponse.json();
			console.log(parsedResponse, "here is the parsedResponse");
			this.props.login(parsedResponse.data)
			this.props.showEdit()
			// this.props.setUserToEdit(parsedResponse.data)
			console.log(this.state.showEdit);
		} catch(err) {
			console.log(err);
		}


	}

	render() {
		return(
			<div>
				<h3>Register</h3>
				<form onSubmit={this.handleSubmit}>
					Email:
					<input type="text" name="email" onChange={this.handleChange}/>
					Username:
					<input type="text" name="username" onChange={this.handleChange} />
					Password:
					<input type="password" name="password" onChange={this.handleChange} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}


export default Register