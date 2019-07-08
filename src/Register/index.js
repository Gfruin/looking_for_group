import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			<Container className="register">
			  <Row className="register-info">
			  	<Col sm="auto">
					<h3>Register</h3>
				</Col>
			  </Row>
			  <Row className="register-info">
				<form onSubmit={this.handleSubmit}>
					<Col sm="auto">
					<h5>Email:</h5> 
					<input type="text" name="email" placeholder="example@example.com" onChange={this.handleChange}/> <br/> <br/>
					</Col>
					<Col sm="auto">
					<h5>Username:</h5>
					<input type="text" name="username" placeholder="GameKing99" onChange={this.handleChange}/> <br/> <br/>
					</Col>
					<Col sm="auto">
					<h5>Password:</h5> 
					<input type="password" name="password" placeholder="PrancingPony" onChange={this.handleChange}/> <br/> <br/>
					</Col>
					<Button variant="outline-danger">Submit</Button>
				</form>
			  </Row>
			    
			<div>
			</div>
				</Container>
		)
	}
}


export default Register