import { GET_AVAILABLE_LABS } from "../actions/types";

const initalState = {
  isLoaded: false,
  labs: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_AVAILABLE_LABS:
      return {
        isLoaded: true,
        labs: action.payload
      };
    default:
      return state;
  }
}
