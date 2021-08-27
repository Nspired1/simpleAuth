import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const myContext = createContext({});

function Context(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    Axios.get("http://localhost:8081/api/auth/getuser", {
      withCredentials: true,
    }).then((res) => {
      console.log("This is context");
      console.log(res.data);
      setUser(res.data);
    });
  }, []);
  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}

export default Context;
