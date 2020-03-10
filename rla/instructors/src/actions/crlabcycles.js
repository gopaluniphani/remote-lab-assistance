import axios from "axios";
import { returnErrors } from "./messages";
import { GET_CR_LABCYCLES, CREATE_LABCYCLE, CLEAR_CR_LABCYCLES } from "./types";

export const getCreatedLabCycles = labcycle_links => dispatch => {
  axios
    .all(labcycle_links.map(link => axios.get(link)))
    .then(res => {
      return res.map(r => r.data);
    })
    .then(data => {
      console.log(data);
      dispatch({
        type: GET_CR_LABCYCLES,
        payload: data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const createNewLabCycle = labcycle => dispatch => {
  axios
    .post("http://localhost:8000/api/labcycles/", labcycle)
    .then(res => {
      dispatch({
        type: CREATE_LABCYCLE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch(returnErrors(err.response.status, err.response.data));
    });
};

export const clearCreatedLabCycles = () => dispatch => {
  dispatch({
    type: CLEAR_CR_LABCYCLES
  });
};
