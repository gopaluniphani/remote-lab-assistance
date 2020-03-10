import { CREATE_LAB, CLEAR_CREATED_LAB } from "./types";
import axios from "axios";
import { returnErrors, createMessage } from "./messages";

export const createNewLab = details => dispatch => {
  axios.post("http://localhost:8000/api/labs/", details).then(res => {
    dispatch({
      type: CREATE_LAB,
      payload: res.data
    });
    dispatch(createMessage({ labCreated: "Lab Created" }));
  });
};

export const clearCreatedLab = () => dispatch => {
  dispatch({
    type: CLEAR_CREATED_LAB
  });
};
