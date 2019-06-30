import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Form } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Nav1 from "../components/Nav1";




const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Login extends Component {
  state = {
    plant: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ plant: res.data }))
      .catch(err => console.log(err));
  }

   

  render() {
    return (
      <Container fluid>
         <Nav1/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Login</h1>
              
              
            </Jumbotron>
          </Col>
          
        </Row>  


        
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" href="/Profile">
    Submit
  </Button>
</Form>
            
      </Container>
    );
  }
}

export default Login;

