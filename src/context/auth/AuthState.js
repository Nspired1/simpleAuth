import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  //   CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    // cookies: cookies.connect.sid,
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  //eslint-disable-next-line
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  //Register User
  const register = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        data,
        withCredentials: true,
        url: "http://localhost:8081/api/auth/signup",
      });
      console.log("This is register in AuthState");
      console.log(res.data);
      console.log(res);
      dispatch({
        // NOTE: res.data is only username and email, as passport-local responses with user object
        type: REGISTER_SUCCESS,
        payload: res,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.res.data.msg,
      });
    }
  };

  //Load User or isLoggedIn
  const loadUser = async () => {
    try {
      const res = await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:8081/api/auth/getuser",
      });

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // Login User
  //const login = () => console.log("Login from frontend");
  const login = async (data, err) => {
    console.log("This is signin in AuthState");

    try {
      const res = await axios({
        method: "POST",
        data,
        withCredentials: true,
        url: "http://localhost:8081/api/auth/signin",
      });

      console.log(res.data);
      console.log(res);
      if (res.data.msg == "No User Exists.") {
        console.log("IF condition MATCH");
        err = "No User Exists.";
        throw err;
      }
      if (res.data.msg == "Sorry, that username and/or email is incorrect") {
        console.log("IF condition MATCH");
        err = "Sorry, that username and/or email is incorrect";
        throw err;
      }

      dispatch({
        // NOTE: res.data is only username and email, as passport-local responses with user object
        type: LOGIN_SUCCESS,
        payload: res,
      });
      //loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };

  // Logout
  //const logout = () => console.log("Logout from frontend");
  const logout = async () => {
    console.log("This is logout in AuthState");
    try {
      const res = await axios({
        method: "GET",
        //req,
        withCredentials: true,
        url: "http://localhost:8081/api/auth/logout",
      }).then((res) => console.log(res));

      console.log(res);
    } catch (err) {
      console.log(err);
    }

    dispatch({ type: LOGOUT });
  };

  //Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        //cookies: state.signedCookies.connect.sid,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
