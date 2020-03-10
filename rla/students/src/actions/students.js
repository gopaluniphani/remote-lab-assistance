import axios from "axios";
import { returnErrors, createMessage } from "./messages";
import { tokenConfig } from "./auth";

import {
  UPDATE_STUDENT,
  STUDENT_LOADED,
  AUTH_ERROR,
  CREATE_MESSAGE
} from "./types";

export const loadStudent = () => (dispatch, getState) => {
  console.log("loading student");
  axios
    .get("http://localhost:8000/api/students", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: STUDENT_LOADED,
        payload: res.data[0]
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const updateProfile = details => (dispatch, getState) => {
  axios
    .patch(
      `http://localhost:8000/api/students/${details.student_id}/`,
      details,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ updateProfile: "Profile Updated" }));
      dispatch({
        type: UPDATE_STUDENT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
