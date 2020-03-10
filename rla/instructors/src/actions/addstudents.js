import { GET_ALL_STUDENTS, CLEAR_ADDED_STUDENTS, ADD_STUDENTS } from "./types";
import { returnErrors, createMessage } from "./messages";
import axios from "axios";
import { tokenConfig } from "./auth";

export const loadAllStudents = () => (dispatch, getState) => {
  axios
    .get("http://localhost:8000/api/student", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ALL_STUDENTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.status, err.response.data));
    });
};

export const addStudents = (lab_id, students) => dispatch => {
  const headers = {
    "X-CSRFToken": "CSRF_TOKEN",
    "content-type": "application/json"
  };
  axios
    .post(
      "http://localhost:8000/addstudents/",
      {
        lab_id: lab_id,
        students: students
      },
      headers
    )
    .then(res => {
      dispatch({
        type: ADD_STUDENTS
      });
      dispatch(
        createMessage({ studentsAdded: "Students added to lab succesfully" })
      );
    })
    .catch(err => {
      dispatch(returnErrors(err.response.status, err.response.data));
    });
};

export const clearAddedStudents = () => dispatch => {
  dispatch({
    type: CLEAR_ADDED_STUDENTS
  });
};
