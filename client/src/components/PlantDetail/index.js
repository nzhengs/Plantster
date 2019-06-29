import React, { Component } from "react";
import "../../assets/css/style.css";
import Modal from "react-modal";

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
  };
  displayPlant(props) {
    return (
      <div id="details" className="card border-0 mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <h3 onClick={this.onClick.bind(this)} >{props.plant.Name}</h3>
            <img
              alt={props.plant.Name}
              src={props.plant.Image}
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <table id="product_detail" className="table table-sm">
                <tbody>
                  <tr>
                    <td width="30%" scope="row">
                      Height
                    </td>
                    <td>{props.plant.Height}</td>
                  </tr>
                  <tr>
                    <td scope="row">Spacing</td>
                    <td>{props.plant.Spacing}</td>
                  </tr>
                  <tr>
                    <td scope="row">Depth</td>
                    <td>{props.plant.Depth}</td>
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
          <h1 id="heading">Alert</h1>
          <div id="full_description">
            <p>ho onodxosisyuctdsvayuchijxok;sjuyxvhsjklxm</p>
          </div>
          <button onClick={this.onClick.bind(this)} isOpen={this.state.isOpen}>close</button>
        </Modal>
      </div>
    );
  }
}





export default PlantDetail;
