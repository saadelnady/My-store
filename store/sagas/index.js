//sagas/index.js
import { all } from "redux-saga/effects";
import someSaga from "./someSaga";

export default function* rootSaga() {
  yield all([
    someSaga(),
    // Add more sagas here
  ]);
}
