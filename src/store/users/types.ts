export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  hobby: string;
};

export type IUserState = {
  data: UserType;
  isLoading: boolean;
  errors: string;
};

export type IUsersState = {
  data: UserType[];
  isLoading: boolean;
  errors: string;
};

export type UserStateType = {
  user: IUserState;
  users: IUsersState;
};
