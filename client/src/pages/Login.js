import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Nav1 from "../components/Nav1";
import { FormBtn } from "../components/Form";
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  constructor() {
      super()
      this.state = {
          username: '',
          password: '',
          redirectTo: null
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
      event.preventDefault()
      console.log('handleSubmit')

      axios
          .post('/api/users/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log('login response: ')
              console.log(response)
              if (response.status === 200) {
                  // update App.js state
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  // update the state to redirect to home
                  this.setState({
                      redirectTo: '/Profile'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log(error);
              
          })
  }






  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    return (
      <Container fluid>
         <Nav1/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Welcome back</h1>
              
            </Jumbotron>
          </Col>
          
        </Row>  


        
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  placeholder="Enter email" 
     value={this.state.username}
     onChange={this.handleChange}
     name="username"
    
    />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={this.state.password}
    onChange={this.handleChange}
    name="password"
    
    
    
    />
  </Form.Group>
  <FormBtn variant="primary" type="submit" href="/Profile"
  onClick={this.handleSubmit}
  >
    Submit
  </FormBtn>
</Form>
            
      </Container>
    );
  }
}
}

export default Login;

