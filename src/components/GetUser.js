// import { useState } from "react";
import axios from "axios";

const getUser = () => {
  axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8081/api/auth/getuser",
  })
    .then((res) => console.log(res))
    .then((res) => res);
};

function GetUser() {
  return (
    <div>
      <h1>Get User</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUser();
        }}
      >
        {/* eslint-disable */}

        <button>Submit</button>
      </form>
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default GetUser;
