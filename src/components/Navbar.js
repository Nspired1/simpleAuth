import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  console.log("This is in NAVBAR");

  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="nav-item">
        <span>Hello {user && user.username}</span>
      </li>
      <li>
        <Link onClick={onLogout} to="#!" className="nav-link">
          <span>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </span>
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
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
    </Fragment>
  );

  //   <li className="nav-item">
  //   <Link to="/admin" className="nav-link">
  //     Admin
  //   </Link>
  // </li>
  //   <li className="nav-item">
  //   <Link to="/" className="nav-link" onClick={logoutUser}>
  //     {" "}
  //     Logout
  //   </Link>
  // </li>

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
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
