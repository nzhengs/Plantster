import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Card } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import design from "../assets/images/design-icon.png";
import seedling from "../assets/images/Seedling-icon.png";
import shop from "../assets/images/shopping-cart-icon.png";
import water from "../assets/images/water-icon.png";
import Eva from "../assets/images/eva.JPEG";
import Ben from "../assets/images/ben.JPEG";
import Anjana from "../assets/images/anjana.jpg";
import Irina from "../assets/images/irina.JPEG";
import Nathan from "../assets/images/nate.JPEG";
import Nav from "../components/Nav";



const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Homepage extends Component {
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
        <Nav/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Plan and manage your garden.</h1>
              <a href="/plants" class="button inset">LET'S GET STARTED</a>
              
            </Jumbotron>
          </Col>
          
        </Row>  


        <Row>
          <Col size="md-12">
            <article>       
          
            <Row>
            <Col size="md-6">

          
            <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={design} alt="Design" />
                <Card.Body>
             <Card.Title>DESIGN</Card.Title>
            <Card.Text>
            We made it easy to design your garden with our simple insert, drag, drop & pull layout tool.
              </Card.Text>
            
            </Card.Body>
            </Card>
                    
                </Col>
                <Col size="md-6">
                <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={seedling} alt="Seedling"/>
                <Card.Body>
             <Card.Title>PLANT</Card.Title>
            <Card.Text>
            Get the information and tools to arrange and plant your garden for optimal success!
                </Card.Text>
            
            </Card.Body>
            </Card>
              
              </Col>
              </Row>
              <Row>
            <Col size="md-6">

            <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={shop} alt="Shopping Cart" />
                <Card.Body>
             <Card.Title>SHOP</Card.Title>
            <Card.Text>
            We help you find the right stuff to buy based on your garden design. You can just check out.
                </Card.Text>
            
            </Card.Body>
            </Card>
                    
                </Col>
                <Col size="md-6">
                <Card style={{ width: '600px' }}>
                <Card.Img variant="top" src={water} alt="Water"/>
                <Card.Body>
             <Card.Title>WATER</Card.Title>
            <Card.Text>
            We'll alert you when your plants need to be watered and just how much so you don't have to worry about it.
                </Card.Text>
            
            </Card.Body>
            </Card>
              
              </Col>
            </Row>
            <Row>
              <Col size="md-12" >
              <h1 className="justify-content-md-center"  style={{ textAlign: "center" }}>MEET THE TEAM</h1>
                            
              </Col>
              </Row>
            <Row >
            <Col size="md-2">
                <h6 class="Irina">Eva</h6>
                <img class="irina-image" src={Eva} alt="eva"></img>
            </Col>
            <Col size="md-2">
                <h6 class="Irina">Ben</h6>
                <img class="irina-image" src={Ben} alt="ben"></img>
            </Col>
            <Col size="md-2">
                <h6 class="Irina">Anjana</h6>
                <img class="irina-image" src={Anjana} alt="anjana"></img>
            </Col>
            <Col size="md-2">
                <h6 class="Irina">Irina</h6>
                <img class="irina-image" src={Irina} alt="irina"></img>
            </Col>
            <Col size="md-2">
                <h6 class="Irina">Nathan</h6>
                <img class="irina-image" src={Nathan} alt="nathan"></img>
            </Col>

            </Row>

            </article>
          </Col>
        </Row>
        <Row>
        <div class="container">
                  <div class="text-center center-block">
                      <p>Connect with us!</p>
                      <a href="https://www.linkedin.com/in/eva-anderson-56250423/"><i id="social-li" class="fa fa-linkedin-square fa-3x social"></i></a>
                          <a href="https://github.com/eanderson111"><i id="social-gh" class="fa fa-github-square fa-3x social"></i></a>
                        <a href="https://twitter.com/EvaKolar"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
              </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Homepage;

