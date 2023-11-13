import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateType } from "./types";

const initialState: UserStateType = {
  users: {
    data: [],
    isLoading: false,
    errors: "",
  },
  user: {
    data: {
      id: "",
      firstname: "",
      lastname: "",
      hobby: "",
    },
    isLoading: false,
    errors: "",
  },
};

export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    getAllUsers: (
      state: UserStateType,
      { payload: sort }: PayloadAction<string>
    ) => {
      state.users.isLoading = true;
      state.users.errors = "";
    },
    successGetAllUsers: (
      state: UserStateType,
      { payload: data }: PayloadAction<any>
    ) => {
      state.users.isLoading = false;
      state.users.data = data.users;
    },
    failGetAllUsers: (
      state: UserStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.users.isLoading = false;
      state.users.errors = error;
    },
    deleteUser: (
      state: UserStateType,
      { payload: id }: PayloadAction<string>
    ) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    successDeleteUser: (
      state: UserStateType,
      { payload: data }: PayloadAction<any>
    ) => {
      state.user.isLoading = false;
      state.users.data = state.users.data.filter(
        (user) => user.id !== data.user.id
      );
    },
    failDeleteUser: (
      state: UserStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    getUser: (state: UserStateType, { payload: id }: PayloadAction<string>) => {
      state.user.isLoading = true;
      state.user.errors = "";
      state.user.data = {
        id: "",
        firstname: "",
        lastname: "",
        hobby: "",
      };
    },
    successGetUser: (
      state: UserStateType,
      { payload: data }: PayloadAction<any>
    ) => {
      state.user.data = data.user;
      state.user.isLoading = false;
    },
    failGetUser: (
      state: UserStateType,
      { payload: error }: PayloadAction<any>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    updateUser: (
      state: UserStateType,
      { payload: data }: PayloadAction<any>
    ) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    successUpdateUser: (state: UserStateType) => {
      state.user.isLoading = false;
    },
    failUpdateUser: (
      state: UserStateType,
      { payload: error }: PayloadAction<any>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
    createUser: (
      state: UserStateType,
      { payload: data }: PayloadAction<any>
    ) => {
      state.user.isLoading = true;
      state.user.errors = "";
    },
    successCreateUser: (state: UserStateType) => {
      state.user.isLoading = false;
    },
    failCreateUser: (
      state: UserStateType,
      { payload: error }: PayloadAction<any>
    ) => {
      state.user.isLoading = false;
      state.user.errors = error;
    },
  },
});

export const {
  getAllUsers,
  successGetAllUsers,
  failGetAllUsers,
  deleteUser,
  successDeleteUser,
  failDeleteUser,
  getUser,
  successGetUser,
  failGetUser,
  updateUser,
  successUpdateUser,
  failUpdateUser,
  createUser,
  successCreateUser,
  failCreateUser,
} = userSlice.actions;
export const actions = userSlice.actions;
export default userSlice.reducer;
