import usersReducer from "./users/slice";
import type { UserStateType } from "./users/types";

export type StateType = {
  users: UserStateType;
};

const rootReducers = {
  users: usersReducer,
};

export default rootReducers;
