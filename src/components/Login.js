import { useState } from "react";

import axios from "axios";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:8081/api/auth/signin",
    }).then(
      (res) => console.log(res),
      console.log(`This is inside login() of Login`)
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
