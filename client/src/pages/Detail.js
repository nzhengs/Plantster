import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

const styles = {
  width: '250px',
  height: '250px',
  margin: "50px",
};


class Detail extends Component {
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
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>Plan and manage your garden.</h1>
              <a href="/plants" target="_blank" class="button inset">LET'S GET STARTED</a>
              
            </Jumbotron>
          </Col>
          
        </Row>  


        <Row>
          <Col size="md-6">
          <article>
           <h1>Synopsis</h1>
          

            <Row>
            <Col size="md-6">
              <ul>
                <li>Type: {this.state.plant.Type}</li>
                <li>Name: {this.state.plant.Name}</li>
                <li>Image Link: <a href={this.state.plant.Image}>Image Link</a> </li>
                <li>Botanical Name: {this.state.plant.BotanicalName}</li>
                <li>Height: {this.state.plant.Height}</li>
                <li>Spacing: {this.state.plant.Spacing}</li>
                <li>Plant Spacing: {this.state.plant.PS}</li>
                <li>Row Spacing: <href>{this.state.plant.RS}</href></li>
                <li>Depth: {this.state.plant.Depth}</li>
                <li>Spread: {this.state.plant.Spread}</li>
                <li>Sun Light: {this.state.plant.Light}</li>
                <li>Yield: {this.state.plant.Yeild}</li>
              </ul>
                </Col>
                <Col size="md-6">
              <ul>
                
                <li>Foliage: <href>{this.state.plant.Foliage}</href></li>
                <li>Growth: {this.state.plant.Growth}</li>
                <li>Fruit: {this.state.plant.Fruit}</li>
                <li>Size: {this.state.plant.Size}</li>
                <li>Maturity: {this.state.plant.Maturity}</li>
                <li>Zone: {this.state.plant.Zone}</li>
                <li>Germination: {this.state.plant.Germination}</li>
                <li>Form: {this.state.plant.Form}</li>
                <li>Flowers: {this.state.plant.Flowers}</li>
                <li>Soil: {this.state.plant.Soil}</li>
                <li>Seeds: {this.state.plant.Seeds}</li>
                <li>Pruning: {this.state.plant.Pruning}</li>
                
              </ul>
              </Col>
              </Row>
              <Col size="md-12">

              <p>Comments: {this.state.plant.Comments}</p>
              </Col>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Plants</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;

