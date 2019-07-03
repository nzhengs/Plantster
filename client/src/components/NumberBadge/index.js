import React from "react";
import "./style.css";

function NumberBadge(props) {
  return (

      <span className="badge" {...props} role="badge">
        # : 3
      </span>

  );
}

export default NumberBadge;
