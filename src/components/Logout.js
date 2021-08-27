//import { useState } from "react";
import axios from "axios";

function Logout() {
  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:8081/api/auth/logout",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Logout</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        <label htmlFor="logout"></label>
        <button>Logout</button>
      </form>
    </div>
  );
}

export default Logout;
