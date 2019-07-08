import React from "react";
import "./style.css";

function NumberBadge(props) {
  console.log("!!!!!!!!!!!!!!!!!!", props)
  return (

      <span className="badge" {...props} role="badge">
        # : {props.size}
      </span>

  );
}

export default NumberBadge;
