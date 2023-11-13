import { all, fork } from "redux-saga/effects";
import { userSaga } from "./users/sagas";

const rootSaga = function* () {
  yield all([
    fork(userSaga),
    // Other forks
  ]);
};

export default rootSaga;
