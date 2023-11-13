import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actions as UserAction } from "../../../store/users/slice";
import type { StateType } from "../../../store/rootReducer";
import type { UserType } from "../../../store/users/types";

import { UserForm } from "../../../components/UserForm";

export const UserUpdateContainer: FC = () => {
  const {
    user: { data },
  } = useSelector((state: StateType) => state.users);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(UserAction.getUser(id!));
  }, []);

  const updateUser = (formValue: UserType) => {
    dispatch(UserAction.updateUser(formValue));
  };

  return <UserForm user={data} updateUser={updateUser} />;
};
