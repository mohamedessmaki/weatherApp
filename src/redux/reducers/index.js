import { combineReducers } from "redux";
import { infoReducer } from "./reducer.info";
import { forecastReducer } from "./reducer.forecast";

export default combineReducers({
  forecastReducer,
  infoReducer,
});
