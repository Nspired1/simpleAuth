import { useState } from "react";
import axios from "axios";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    axios({
      method: "POST",
      data: {
        email: registerEmail,
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:8081/api/auth/signup",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </label>
        <button onClick={register}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
