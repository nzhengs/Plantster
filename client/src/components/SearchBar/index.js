import React from "react";
import "../../assets/css/style.css";

function SearchBar({ children }) {
  return (
    <div className="form-group">
      <label for="exampleFormControlInput1">Search for your plant</label>
      {children}
    </div>
  );
}

export default SearchBar;
