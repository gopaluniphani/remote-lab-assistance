import axios from "axios";
import { GET_LABCYCLES } from "./types";
import { tokenConfig } from "./auth";

export const getLabCycles = labcycle_links => (dispatch, getState) => {
  axios
    .all(labcycle_links.map(link => axios.get(link, tokenConfig(getState))))
    .then(res => {
      return res.map(r => r.data);
    })
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_LABCYCLES,
        payload: data
      });
    });
};
