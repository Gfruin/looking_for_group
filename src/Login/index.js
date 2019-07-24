import React, {Component} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


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

			if(loginResponse.status === 500) {
				this.props.showRegister()
				console.log("here is the showRegister");
			}
			const parsedResponse = await loginResponse.json()
			if(parsedResponse.status != 500) {
				this.props.login(parsedResponse.data)

			} 
			console.log(parsedResponse, 'here is the parsedResponse');
			// this.props.setUserToEdit(parsedResponse.data)
			console.log('is this working?');
			// console.log(this.props.setUserToEdit(parsedResponse.data), 'here is the props of setUserToEdit in Login');
		} catch(err) {
			console.log(err);
		}
	}
	render() {
		return(
			<div className="login-info">
				<Container className="login">
					<h3>Login</h3>
					<Form className="login-info" onSubmit={this.handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
	    				<Form.Control type="text" name="email" placeholder="Enter email" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" placeholder="Enter password" onChange={this.handleChange} />
					</Form.Group>
						<Button variant="outline-danger" type="submit">Login</Button>
					</Form>
				</Container>
			</div>
		)
	}
}


export default Login;