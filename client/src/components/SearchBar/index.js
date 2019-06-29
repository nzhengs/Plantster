import React from "react";
import "../../assets/css/style.css"

function SearchBar({ children }) {
  return (
    
    <form>
      <div className="form-group">
        <label for="garden-name">Name your garden and specify dimensions</label>
        <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="row">
        <div className="dimension-1 col">
          <input type="text" className="form-control" placeholder="feet" />
        </div>

        <div className="dimension-2 col">
          <h6> by </h6>
        </div>

        <div className="dimension-3 col">
          <input
            type="text"
            className="form-control w-200"
            placeholder="feet"
          />
        </div>
      </div>

      <div className="form-group">
        <label for="exampleFormControlInput1">Search for your plant</label>
        {children}
      </div>
      {/* <button type="button" className="btn btn-secondary">
        Start your garden
      </button> */}
    </form>
    
  );
}

export default SearchBar;
