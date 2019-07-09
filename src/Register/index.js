import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

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
			console.log("I'm about to fetch to ", process.env.REACT_APP_BACKEND_URL);
			console.log("That url should not have a slash");
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
			<Container className="register-info">
			<h4>Please Register</h4>
				<Form onSubmit={this.handleSubmit}>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
	    				<Form.Control type="text" name="email" placeholder="Enter email" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" name="username" placeholder="Enter username" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" placeholder="Enter password" onChange={this.handleChange} />
					</Form.Group>
					<Button variant="outline-danger" type="submit">Submit</Button>
				</Form>
			</Container>
		)
	}
}


export default Register