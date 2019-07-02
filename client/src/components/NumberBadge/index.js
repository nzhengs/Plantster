import React from "react";
import "./style.css";

function NumberBadge(props) {
  return (
      <span onClick={() => props.removePlant(props.id)} className="remove">
        𝘅
      </span>
  
  );
}

export default NumberBadge;
