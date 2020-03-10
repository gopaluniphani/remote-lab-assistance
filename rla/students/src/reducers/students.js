import {
  CLEAR_STUDENT,
  STUDENT_LOADED,
  UPDATE_STUDENT
} from "../actions/types";

const initialState = {
  id: 0,
  first_name: "",
  last_name: "",
  section: "",
  year: "",
  department: "",
  activelablinks: [],
  isLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STUDENT_LOADED:
      return {
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        section: action.payload.section,
        year: action.payload.year,
        department: action.payload.department,
        activelablinks: action.payload.activelabs,
        isLoaded: true
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        section: action.payload.section,
        year: action.payload.year,
        department: action.payload.department
      };
    case CLEAR_STUDENT:
      return {
        id: 0,
        first_name: "",
        last_name: "",
        section: "",
        year: "",
        department: "",
        activelablinks: [],
        isLoaded: false
      };
    default:
      return state;
  }
}
