import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";
import seedling from "../assets/images/Seedling-icon.png";
import Nav1 from "../components/Nav1";
import { FormBtn } from "../components/Form";
import axios from 'axios'






const styles = {

  width: '250px',
  height: '250px',
  margin: "50px",
};


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
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

/*
  $(document).ready( function () {
    $.get("/api/user/").then(function(userInfo) {
  console.log(userInfo)
  $("#userName").text(`${userInfo.user.firstName} ${userInfo.user.lastName}` )
  $("#userEmail").text(`${userInfo.user.email}` )
  })
  $("#signOut").on("click", function() {
    console.log("clicked")
    $.post("/api/user/logout/").then(function() {
      window.location="/"
    })
  })
  })
   
  */



  

  render() {
    return (
      <Container fluid>
          <Nav1/>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Hi, {this.state.username}</h1>      
            <a href="/plants" className="button inset">Start a garden</a>        
            </Jumbotron>
          </Col>
        </Row>  


        <Row>
          <Col size="md-12">
            
          <div className="card-body">
              <table id="product_detail" className="table table-sm">
                <tbody>
                  <tr>
                    <td width="80%" scope="row">
                      prop
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf043;
                    </td>
                  </tr>

                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf043;
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:30,color:'#A0D413'}}>&#xf043;
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#A0D413'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#A0D413'}}>&#xf043;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
              
        

         
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    );
  }
}

export default Profile;

