import React from "react";

function SearchBar({children}) {
  return (
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Search for your plant</label>
          {children}
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select the variety</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Kentucky beans</option>
            <option>Midwest beans</option>
            <option>Mama's beans</option>
            <option>Papa's beans</option>
          </select>
        </div>
        <button type="button" className="btn btn-secondary">
          Place it in the garden
        </button>
      </form>
  );
}

export default SearchBar;
