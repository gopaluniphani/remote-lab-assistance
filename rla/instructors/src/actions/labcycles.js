import axios from "axios";
import { GET_LABCYCLES } from "./types";
import { tokenConfig } from "./auth";
import { returnErrors } from "./messages";

export const getLabCycles = labcycle_links => (dispatch, getState) => {
  axios
    .all(labcycle_links.map(link => axios.get(link, tokenConfig(getState))))
    .then(res => {
      return res.map(r => r.data);
    })
    .then(data => {
      dispatch({
        type: GET_LABCYCLES,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
