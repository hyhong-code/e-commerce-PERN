import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";
import setTokenHeader from "../utils/setTokenHeader";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signup = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/register", formData, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: SIGNUP_FAILED,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  setTokenHeader(localStorage.getItem("jwt"));
  try {
    const res = await axios.get("/api/auth/loadme");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};