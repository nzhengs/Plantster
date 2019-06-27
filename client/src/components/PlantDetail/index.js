import React from "react";
import "../../assets/css/style.css"

function PlantDetail(props) {
  return props.plant ? displayPlant(props) : <div>Select a Plant</div>;
}
export default PlantDetail;

function displayPlant(props) {
  return (
    <div id="details" className="card border-0 m-0">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img alt={props.plant.Name} src={props.plant.Image} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <table id="product_detail" className="table table-sm">
              <tbody>
                <tr>{props.plant.Name}</tr>
                <tr>
                  <td width="30%" scope="row">
                    Height
                  </td>
                  <td>{props.plant.Height}</td>
                </tr>
                <tr>
                  <td scope="row">Spacing</td>
                  <td>
                    {props.plant.Spacing}
                  </td>
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
    </div>
  );
}
