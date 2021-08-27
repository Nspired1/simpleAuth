import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { myContext } from "../Context";
import AuthContext from "../context/auth/authContext";

function Home() {
  const authContext = useContext(AuthContext);
  const loggerContext = useContext(myContext);
  console.log("This is loggerContext");
  console.log(loggerContext);

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    authContext.loadUser();
    try {
      const res = () =>
        axios
          // .get("http://localhost:8081/api/auth/checksAuthentication", {
          //   withCredentials: true,
          // })
          .get("http://localhost:8081/api/auth/getuser", {
            withCredentials: true,
          })
          .then((res) => {
            //setLoggedIn(res.data.authenticated);
            console.log(res.data);
            setLoggedIn(res.data);
          }) // eslint-disable-next-line
          .catch((error) => {
            setLoggedIn(false);
            loggedIn;
          });
      res();
    } catch (err) {
      err.message;
    }
  }, []);

  return (
    <div>
      <div>
        <p>This is HOME page</p>
      </div>
    </div>
  );
}

export default Home;
