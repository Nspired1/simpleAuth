import { useState, useEffect, useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";
// import axios from "axios";

function Login(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    //not suppose to do conditionals on logins due to hacking, but for dev doing it to trace any errors
    if (error === "Sorry, that username and/or email is incorrect") {
      setAlert(error, "danger");
      clearErrors();
    } else if (error === "No User Exists.") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setAlert("Please fill in email and/or password", "danger");
    } else {
      login({ username, password });
    }
    //clears form after submit
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Username
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={onChange}
            />
          </label>
        </div>
        <button className="btn btn-primary btn-large">Submit</button>
      </form>
    </div>
  );
}

export default Login;
