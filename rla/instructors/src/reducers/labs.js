import { GET_LABS, CLEAR_LABS } from "../actions/types";

const initalState = {
  isLoaded: false,
  labs: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_LABS:
      return {
        ...state,
        isLoaded: true,
        labs: action.payload
      };
    case CLEAR_LABS:
      return {
        isLoaded: false,
        labs: []
      }
    default:
      return state;
  }
}
