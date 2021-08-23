import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <div className="nav navbar navbar-expand-sm navbar-light mb-3 ">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <span>
                <FontAwesomeIcon icon={faPaw} /> Barker
              </span>
            </Link>
          </div>
          <ul className="navbar-nav navbar-right ">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                {" "}
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
