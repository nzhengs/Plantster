import React from "react";

function PlantDetail() {
  return (
    <div id="details" className="card border-0 mb-3" style="max-width: 900px;">
      <div className="row no-gutters">
        <div className="col-md-4">
          {/* <img
            src="../public/assets/images/beans.jpg"
            className="card-img"
            alt="..."
          /> */}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <table id="product_detail" className="table table-sm">
              <tbody>
                <tr>
                  <td width="30%" scope="row">
                    Height
                  </td>
                  <td>5-7 feet</td>
                </tr>
                <tr>
                  <td scope="row">Spacing</td>
                  <td>
                    Plant 1 inch deep and 4 inches apart in rows 30 inches
                    apart.
                  </td>
                </tr>
                <tr>
                  <td scope="row">Depth</td>
                  <td>1 - 1.5 inches.</td>
                </tr>
                <tr>
                  <td scope="row">Light</td>
                  <td>Full sun.</td>
                </tr>
                <tr>
                  <td scope="row">Zone</td>
                  <td>3-9 annual</td>
                </tr>
                <tr>
                  <td scope="row">Days to maturity</td>
                  <td>67 days.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
 export default PlantDetail;