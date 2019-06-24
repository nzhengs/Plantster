import React from "react";
import "../../assets/css/style.css"

function SearchBar({ children }) {
  return (
    <form>
      <div className="form-group">
        <label for="garden-name">Name your garden</label>
        <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="row">
        <div className="dimension-1 col">
          <input type="text" className="form-control" placeholder="width" />
        </div>

        <div className="dimension-2 col">
          <h4> by </h4>
        </div>

        <div className="dimension-3 col">
          <input
            type="text"
            className="form-control w-200"
            placeholder="length"
          />
        </div>
      </div>

      <div className="form-group">
        <label for="exampleFormControlInput1">Search for your plant</label>
        {children}
      </div>
      <button type="button" className="btn btn-secondary">
        Start your garden
      </button>
    </form>
  );
}

export default SearchBar;
