import { GET_LABCYCLES, CLEAR_LABCYCLES } from "../actions/types";

const initialState = {
  isLoaded: false,
  labcycles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LABCYCLES:
      return {
        isLoaded: true,
        labcycles: action.payload
      };
    case CLEAR_LABCYCLES:
      return {
        isLoaded: false,
        labcycles: []
      };
    default:
      return state;
  }
}
