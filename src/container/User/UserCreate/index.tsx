import { FC } from "react";
import { useDispatch } from "react-redux";

import { actions as UserActions } from "../../../store/users/slice";
import type { UserType } from "../../../store/users/types";

import { UserForm } from "../../../components/UserForm";

export const UserCreateContainer: FC = () => {
  const dispatch = useDispatch();

  const createUser = (formData: UserType) => {
    dispatch(UserActions.createUser(formData));
  };

  return <UserForm createUser={createUser} />;
};
