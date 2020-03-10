import { GET_AVAILABLE_LABS } from "./types";
import axios from "axios";
import { returnErrors } from "./messages";

export const loadAvailableLabs = () => dispatch => {
  axios
    .get("http://localhost:8000/api/labs")
    .then(res => {
      dispatch({
        type: GET_AVAILABLE_LABS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
