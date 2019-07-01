import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";
import seedling from "../assets/images/Seedling-icon.png";
import Nav1 from "../components/Nav1";






const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Profile extends Component {
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
            <h1>Profile</h1>              
            </Jumbotron>
          </Col>
          
        </Row>  

        <Row>
        <Col size="md-6">
        </Col>
        <Col size="md-6">
        <a href="/plants" class="button inset">Start a New Garden</a>
        </Col>

        </Row>



        <Row>
          <Col size="md-12">
            <article>       
          
            <Row>
            <Col size="md-6">

          
            <Card style={{ width: '600px' }}>
                <Card.Body>
             <Card.Title>YOUR NAME HERE</Card.Title>
                <Card.Text>
                        Email and anyother info??
                </Card.Text>
            
            </Card.Body>
            </Card>
                    
                </Col>
                <Col size="md-6">
                <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={seedling} alt="Seedling"/>
                <Card.Body>
             <Card.Title>GARDEN NAME</Card.Title>
            <Card.Text>
            Garden 1
            <Link to="/Plants">← To Your Garden </Link>
                </Card.Text>
            
            </Card.Body>
            </Card>
              
              </Col>
              </Row>
             
            

            </article>
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    );
  }
}

export default Profile;

