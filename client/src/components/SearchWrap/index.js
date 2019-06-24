import React from "react";

function SearchWrap({ children }) {
  return (
    <div id="container">
      <div id="plant-detail" className="row" />
      {children}
    </div>
  );
}
export default SearchWrap;
