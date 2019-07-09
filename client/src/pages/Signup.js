import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Form, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Nav1 from "../components/Nav1";
import { FormBtn } from "../components/Form";
import { Redirect } from 'react-router-dom'
import axios from 'axios'

  
  class Signup extends Component {
    constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        username: '',
        password: '',
        confirmPassword: '',
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
      console.log('sign-up handleSubmit, username: ')
      console.log(this.state.username)
      event.preventDefault()
  
      //request to server to add a new username/password
      axios.post('/api/user/signup', {
        firstName: this.state.firstName,
        lastName: this.state.lastName, 
        username: this.state.username,
        password: this.state.password
      })
        .then(response => {
          console.log("response")
          console.log(response)
          if (!response.data.errmsg) {
            console.log('successful signup')
            this.setState({ //redirect to login page
              redirectTo: '/Login'
            })
          } else {
            console.log('username already taken')
          }
        }).catch(error => {
          console.log('signup error: ')
          console.log(error)
  
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
            <h1>Let's save your info</h1>              
            </Jumbotron>
          </Col> 
        </Row>  
        <Form>
        <Form.Row>
    <Form.Group as={Col} controlId="formGridfirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="John" 
        type="text"
        value={this.state.firstName}
        onChange={this.handleChange}
        name="firstName"
        
      
      
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridlastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Smith" 
      type="text"
       value={this.state.lastName}
       onChange={this.handleChange}
       name="lastName"
      
      
      />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridusername">
      <Form.Label>Email</Form.Label>
      <Form.Control placeholder="Enter email"
      type="text"
       value={this.state.username}
       onChange={this.handleChange}
       name="username"
      
      
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
       value={this.state.password}
       onChange={this.handleChange}
       name="password"
      
      />
    </Form.Group>
  </Form.Row>
  
  <FormBtn variant="primary" 
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

export default Signup;
