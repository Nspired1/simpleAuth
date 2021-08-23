import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { myContext } from "../Context";

function Home() {
  const loggerContext = useContext(myContext);
  console.log(loggerContext);

  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/auth/checksAuthentication", {
        withCredentials: true,
      })
      // .get("http://localhost:8081/api/auth/getuser", {
      //   withCredentials: true,
      // })
      .then((res) => {
        //setLoggedIn(res.data.authenticated);
        console.log(res.data);
        setLoggedIn(res.data);
      }) // eslint-disable-next-line
      .catch((error) => {
        setLoggedIn(false);
        loggedIn;
      });
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
