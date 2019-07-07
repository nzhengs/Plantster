import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Form, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Nav1 from "../components/Nav1";
import { FormBtn } from "../components/Form";




const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Signup extends Component {
  state = {
    user: {},
    firstName: "",
    lastName: "",
    username: "",
    password: ""

  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
 // componentDidMount() {
 //   API.getBook(this.props.match.params.id)
 //     .then(res => this.setState({ plant: res.data }))
 //     .catch(err => console.log(err));
 // }

  /*

  $("#btn-signup ").on("click", function() {
    console.log("signup clicked");
    var firstName = $("input[name='firstname']").val();
    var lastName = $("input[name='lastname']").val();
    var email = $("input[name='email']").val();
    var password = $("input[name='password1']").val();
    var user = {
      firstName,lastName,email,password
    }
    console.log(user)
    $.post("/api/user/signup", user, function(data) {
    console.log(data)
    if (data.firstName) {
      window.location = "/profile"
    }else {
      alert ("Please enter a new email")
    }
    })
    })

    */


   handleFormSubmit = event => {
    event.preventDefault();
    //if (this.state.username && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,       
        username: this.state.username,
        password: this.state.password
      })
        
      

      console.log( this.state.firstName)
      console.log( this.state.lastName)
        console.log( this.state.username)
        console.log( this.state.password)
     //  .then(window.open("/Profile"))
      // .catch(err => console.log(err))
  
  //  }
  };
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
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
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="John" 
        value={this.state.firstName}
        onChange={this.handleInputChange}
        name="firstName"
      
      
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Smith" 
       value={this.state.lastName}
       onChange={this.handleInputChange}
       name="lastName"
      
      
      />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control placeholder="Enter email"
       value={this.state.username}
       onChange={this.handleInputChange}
       name="username"
      
      
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
       value={this.state.password}
       onChange={this.handleInputChange}
       name="password"
      
      />
    </Form.Group>
  </Form.Row>
  
  <FormBtn variant="primary" 
   onClick={this.handleFormSubmit}
  // type="submit" 
  href="/Profile"  
  >
    Submit
  </FormBtn>
  
</Form>

        
        
            
      </Container>
    );
  }
}

export default Signup;
