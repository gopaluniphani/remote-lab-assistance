import { combineReducers } from "redux";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";
import students from "./students";
import labs from "./labs";
import labcycles from "./labcycles";

export default combineReducers({
  messages,
  errors,
  auth,
  students,
  labs,
  labcycles
});
