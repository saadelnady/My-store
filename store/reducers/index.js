// redux/reducers/index.js
import { combineReducers } from "redux";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  some: someReducer,
  // Add more reducers here
});

export default rootReducer;
