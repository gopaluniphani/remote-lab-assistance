import { combineReducers } from "redux";
import labs from "./labs";
import labcycles from "./labcycles";
import messages from "./messages";
import errors from "./errors";
import auth from "./auth";
import instructor from "./instructor";
import students from "./students";
import availablelabs from "./availablelabs";
import createlab from "./createlab";
import addlab from "./addlab";
import crlabcycles from "./crlabcycles";
import addstudents from "./addstudents";

export default combineReducers({
  labs,
  labcycles,
  messages,
  errors,
  auth,
  instructor,
  students,
  availablelabs,
  createlab,
  addlab,
  crlabcycles,
  addstudents
});
