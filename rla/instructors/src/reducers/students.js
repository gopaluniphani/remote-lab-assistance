import { GET_STUDENTS, CLEAR_STUDENTS } from "../actions/types";

const initialState = {
  isLoaded: false,
  students: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        isLoaded: true,
        students: action.payload
      };
    case CLEAR_STUDENTS:
      return {
        isLoaded: false,
        students: action.payload
      };
    default:
      return state;
  }
}
