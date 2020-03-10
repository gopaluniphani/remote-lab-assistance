import { ADD_LAB } from "../actions/types";

const initialState = {
  lab_added: false,
  lab_id: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LAB:
      return {
        lab_added: true,
        lab_id: action.payload
      };
    default:
      return state;
  }
}
