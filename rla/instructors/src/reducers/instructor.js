import {
  CLEAR_INSTRUCTOR,
  INSTRUCTOR_LOADED,
  UPDATE_PROFILE
} from "../actions/types";

const initialState = {
  id: 0,
  first_name: "",
  last_name: "",
  department: "",
  isLoaded: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case INSTRUCTOR_LOADED:
      return {
        id: action.payload.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        department: action.payload.department,
        isLoaded: true
      }
    case CLEAR_INSTRUCTOR:
      return {
        id: 0,
        first_name: "",
        last_name: "",
        department: "",
        isLoaded: false
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        department: action.payload.department
      }
    default:
      return state;
  }
}