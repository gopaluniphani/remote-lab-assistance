import { CREATE_LAB, CLEAR_CREATED_LAB } from "../actions/types";

const initialState = {
  labCreated: false,
  lab: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_LAB:
      return {
        labCreated: true,
        lab: action.payload
      };
    case CLEAR_CREATED_LAB:
      return {
        labCreated: false,
        lab: null
      };
    default:
      return state;
  }
}
