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
            <h1>Let's save your info</h1>              
            </Jumbotron>
          </Col> 
        </Row>  
        <Form>
        <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="John" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Smith" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
  
  <FormBtn variant="primary" type="submit" href="/Profile">
    Submit
  </FormBtn>
</Form>

        
        
            
      </Container>
    );
  }
}

export default Signup;
