import { combineReducers } from "redux";
import personDetails from "./slices/personDetails";
import educationalDetails from "./slices/educationalDetails";

const formReducer = combineReducers({
  personDetails,
  educationalDetails,
});

export default formReducer;
