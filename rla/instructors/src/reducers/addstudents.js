import {
  GET_ALL_STUDENTS,
  ADD_STUDENTS,
  CLEAR_ADDED_STUDENTS
} from "../actions/types";

const initialState = {
  students_added: false,
  students: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case ADD_STUDENTS:
      return {
        ...state,
        students_added: true
      };
    case CLEAR_ADDED_STUDENTS:
      return {
        ...state,
        students_added: false
      };
    default:
      return state;
  }
}
