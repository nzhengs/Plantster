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
import axios from 'axios'


const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.logoutUser = this.logoutUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.logoutUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  logoutUser() {
    axios.post('/api/user/logout').then(response => {
      console.log('log user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.props.updateUser({
          loggedIn: false,
          username: null
      })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
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
            <p>We made it easy to design your garden with our simple insert, drag, drop & pull layout tool.</p>
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
            <p>Get the information and tools to arrange and plant your garden for optimal success!</p>
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
            <p>We help you find the right stuff to buy based on your garden design. You can just "check out."</p>
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
            <p>We'll alert you when your plants need to be watered and just how much so you don't have to worry about it.</p>
                </Card.Text>
            
            </Card.Body>
            </Card>
              
              </Col>
            </Row>
            <Row>
              <Col size="md-12" >
              <h1 className="justify-content-md-center"  style={{ textAlign: "center" }}>Meet the team</h1>
                            
              </Col>
              </Row>
            <Row >
          
              <div id="team" class="col-md-2 col-md-offset-1">
                  <h6 class="Irina">Anjana</h6>
                  <img class="irina-image" src={Anjana} alt="anjana"></img>
              </div>
              <div class="col-md-2">
                  <h6 class="Irina">Ben</h6>
                  <img class="irina-image" src={Ben} alt="ben"></img>
              </div>
              <div class="col-md-2">

                  <h6 class="Irina">Nate</h6>
                  <img class="irina-image" src={Nathan} alt="nathan"></img>
              </div>
              <div class="col-md-2">
                  <h6 class="Irina">Irina</h6>
                  <img class="irina-image" src={Irina} alt="irina"></img>
              </div>

              <div class="col-md-2">
                  <h6 class="Irina">Eva</h6>
                  <img class="irina-image" src={Eva} alt="eva"></img>
              </div>


            </Row>

            </article>
          </Col>
        </Row>
        <Row>
        <div className="container">
                  <div className="text-center center-block">
                      <p>Connect with us!</p>
                          <a href="https://github.com/eanderson111/Plantster"><i id="social-gh" className="fa fa-github-square fa-3x social"></i></a>

              </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Homepage;

