import React, { useState, useContext, useEffect } from "react";
//import axios from "axios";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      console.log("Register SUBMIT");
      // register() from authContext
      register({
        username,
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
