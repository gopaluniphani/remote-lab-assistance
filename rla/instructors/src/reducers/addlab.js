import { ADD_LAB } from "../actions/types";

const initialState = {
  lab_added: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LAB:
      return {
        lab_added: true
      };
    default:
      return state;
  }
}
