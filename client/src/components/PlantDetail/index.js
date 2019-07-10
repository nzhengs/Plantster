import React, { Component } from "react";
import "../../assets/css/style.css";
import Modal from "react-modal";
import { Col, Row, Container } from "../Grid";
import { Button } from "react-bootstrap";

class PlantDetail extends Component {
  state = {
    isOpen: false
  };
  render() {
    return this.props.plant ? (
      this.displayPlant(this.props)
    ) : (
      <div>Select a Plant</div>
    );
  }
  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  displayPlant(props) {
    return (
      <div id="details" className="card border-0 mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              alt={props.plant.Name}
              src={props.plant.Image}
              className="card-img"
              onClick={this.onClick.bind(this)}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <table id="product_detail" className="table table-sm">
                <thead>
                  <tr>
                    <th colSpan="2">
                      <h4 onClick={this.onClick.bind(this)}>
                        {props.plant.Name}
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="30%" scope="row">
                      Height
                    </td>
                    <td>{props.plant.Height}</td>
                  </tr>

                  <tr>
                    <td scope="row">Light</td>
                    <td>{props.plant.Light}</td>
                  </tr>
                  <tr>
                    <td scope="row">Zone</td>
                    <td>{props.plant.Zone}</td>
                  </tr>
                  <tr>
                    <td scope="row">Days to maturity</td>
                    <td>{props.plant.Maturity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal
          isOpen={this.state.isOpen}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}
        >
          <Container fluid>
            <Row>
              <Col size="sm-12">
                <h1>{this.props.plant.Name}</h1>
              </Col>
            </Row>
            <Row>
              <Col size="sm-6">
                <img src={this.props.plant.Image} />
              </Col>
              <Col size="sm-6">
                <li>Botanical Name: {this.props.plant.BotanicalName}</li>
                <li>Type: {this.props.plant.Type}</li>
                <li>Name: {this.props.plant.Name}</li>
                <li>Height: {this.props.plant.Height}</li>
                <li>Maturity: {this.props.plant.Maturity}</li>
                <li>Yield: {this.props.plant.Yield}</li>
                <li>Plant Spacing: {this.props.plant.PS}</li>
                <li>
                  Row Spacing: <href>{this.props.plant.RS}</href>
                </li>
                <li>Depth: {this.props.plant.Depth}</li>
                <li>Spread: {this.props.plant.Spread}</li>
                <li>Sun Light: {this.props.plant.Light}</li>
                <li>
                  Foliage: <href>{this.props.plant.Foliage}</href>
                </li>
                <li>Growth: {this.props.plant.Growth}</li>
                <li>Fruit: {this.props.plant.Fruit}</li>
              </Col>
            </Row>
            <Row>
              <Col size="sm-12">
                <ul>
                  <li>Size: {this.props.plant.Size}</li>
                  <li>Zone: {this.props.plant.Zone}</li>
                  <li>Germination: {this.props.plant.Germination}</li>
                  <li>Form: {this.props.plant.Form}</li>
                  <li>Flowers: {this.props.plant.Flowers}</li>
                  <li>Soil: {this.props.plant.Soil}</li>
                  <li>Seeds: {this.props.plant.Seeds}</li>
                  <li>Pruning: {this.props.plant.Pruning}</li>
                  <li>Comments: {this.props.plant.Comments}</li>
                </ul>
              </Col>
            </Row>
          </Container>
          <Button
            className="float-right"
            variant="success"
            onClick={this.onClick.bind(this)}
            isOpen={this.state.isOpen}
          >
            Close
          </Button>
        </Modal>
      </div>
    );
  }
}

export default PlantDetail;
