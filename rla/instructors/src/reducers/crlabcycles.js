import {
  GET_CR_LABCYCLES,
  CLEAR_CR_LABCYCLES,
  CREATE_LABCYCLE
} from "../actions/types";

const initialState = {
  isLoaded: false,
  labcycles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CR_LABCYCLES:
      return {
        labcycles: action.payload
      };
    case CREATE_LABCYCLE:
      return {
        ...state,
        isLoaded: !state.isLoaded,
        labcycles: [...state.labcycles, action.payload]
      };
    case CLEAR_CR_LABCYCLES:
      return {
        isLoaded: false,
        labcycles: []
      };
    default:
      return state;
  }
}
