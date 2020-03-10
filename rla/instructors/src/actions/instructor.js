import axios from "axios";
import { returnErrors, createMessage } from "./messages";
import { tokenConfig } from "./auth";

import { INSTRUCTOR_LOADED, AUTH_ERROR, UPDATE_PROFILE } from "./types";

export const loadInstructor = () => (dispatch, getState) => {
  axios
    .get("http://localhost:8000/api/instructors", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: INSTRUCTOR_LOADED,
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
      `http://localhost:8000/api/instructors/${details.instructor_id}/`,
      details,
      tokenConfig(getState)
    )
    .then(res => {
      dispatch(createMessage({ profileUpdated: "Profile Updated" }));
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
