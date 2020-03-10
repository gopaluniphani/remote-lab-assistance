import axios from "axios";
import { GET_STUDENTS } from "./types";
import { tokenConfig } from "./auth";
import { returnErrors } from "./messages";

export const getStudents = student_links => (dispatch, getState) => {
  axios
    .all(student_links.map(link => axios.get(link, tokenConfig(getState))))
    .then(res => res.map(r => r.data))
    .then(data => {
      dispatch({
        type: GET_STUDENTS,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
