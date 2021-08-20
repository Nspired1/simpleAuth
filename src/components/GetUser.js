// import { useState } from "react";
import axios from "axios";

const getUser = () => {
  axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8081/api/auth/getuser",
  }).then((res) => console.log(res));
};

function GetUser() {
  return (
    <div>
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
    </div>
  );
}

export default GetUser;
