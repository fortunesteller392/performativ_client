import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { UserList } from "../../../components/UserList";

import { actions as UserAction } from "../../../store/users/slice";
import type { StateType } from "../../../store/rootReducer";

export const UserListContainer: FC = () => {
  const {
    users: { data },
  } = useSelector((state: StateType) => state.users);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sort = queryParams.get("sort");
  const filter = queryParams.get("filter");

  useEffect(() => {
    dispatch(UserAction.getAllUsers(sort ? sort : "lastname"));
  }, [sort]);

  const deleteUser = (id: string) => {
    dispatch(UserAction.deleteUser(id));
  };

  return (
    <UserList
      sort={sort!}
      filter={filter!}
      users={data.filter((user) =>
        user.firstname.toLowerCase().includes(filter?.toLowerCase() || "")
      )}
      deleteUser={deleteUser}
    />
  );
};
