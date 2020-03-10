import { ADD_LAB } from "./types";
import axios from "axios";

export const addLab = (instructor_id, lab_id) => dispatch => {
  const headers = {
    "X-CSRFToken": "CSRF_TOKEN",
    "content-type": "application/json"
  };
  console.log(instructor_id, lab_id);
  axios
    .post(
      `http://localhost:8000/addlabs/`,
      {
        instructor_id: instructor_id,
        lab_id: lab_id
      },
      {
        headers: headers
      }
    )
    .then(res => {
      dispatch({
        type: ADD_LAB
      });
    })
    .catch(err => {
      console.log(err);
    });
};
