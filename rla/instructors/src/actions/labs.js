import axios from "axios";
import { GET_LABS } from "./types";
import { tokenConfig } from "./auth";
import { returnErrors } from "./messages";

export const getLabs = instructor_id => (dispatch, getState) => {
  axios
    .get(
      `http://localhost:8000/api/activelabs?instructor_id=${instructor_id}`,
      tokenConfig(getState)
    )
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: GET_LABS,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
