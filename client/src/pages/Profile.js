import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";
import seedling from "../assets/images/Seedling-icon.png";
import Nav1 from "../components/Nav1";
import { FormBtn } from "../components/Form";






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
            <h1>Hi, Your name here</h1>      
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
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf043;
                    </td>
                  </tr>

                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf043;
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf043;
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">prop</td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf07a;
                    </td>
                    <td style={{fontFamily:'fontAwesome',fontSize:40,color:'#424242'}}>&#xf043;
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

