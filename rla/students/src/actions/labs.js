import axios from "axios";
import { GET_LABS } from "./types";
import { tokenConfig } from "./auth";

export const getLabs = activelab_links => (dispatch, getState) => {
  axios
    .all(activelab_links.map(link => axios.get(link, tokenConfig(getState))))
    .then(res => {
      return res.map(r => r.data);
    })
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
