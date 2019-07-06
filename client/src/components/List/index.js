import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ props }) {
  return (
    <div className="list-overflow-container col-sm-4 col-md-4 col-lg-8">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
    <li className="list-group-item" style={{backgroundColor:props.background}}>{props.children}</li>
  )
}
