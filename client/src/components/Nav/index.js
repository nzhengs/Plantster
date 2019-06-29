import React from "react";
import logo from "../../assets/images/Plantster_color/Plantster_green_B.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light static-top">
      <a className="navbar-brand">
        <img src={logo} height="75" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Sign up
            </a>
          </li>
          <li className="nav-item">
            <a href="#connect" className="nav-link">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
