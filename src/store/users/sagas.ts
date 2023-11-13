import { PayloadAction } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import axios from "axios";
import { put, takeLatest, takeLeading } from "redux-saga/effects";

import { API_URL } from "../../consts";
import type { IUsersState, IUserState } from "./types";

import { PATH } from "../../consts/route";

import {
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
} from "./slice";

import { navigate } from "../../utils/history";

// Fetch all users
function* getAllUsersSaga({ payload: sort }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<IUsersState> = yield axios.get(
      `${API_URL}/users?sort=${sort}`
    );
    yield put(successGetAllUsers(response.data));
  } catch (error) {
    yield put(failGetAllUsers(`${error}`));
  }
}

// Fetch a user by id
function* getUserSaga({ payload: id }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<IUserState> = yield axios.get(
      `${API_URL}/users/${id}`
    );
    yield put(successGetUser(response.data));
  } catch (error) {
    yield put(failGetUser(`${error}`));
  }
}

// Delete a user
function* deleteUserSaga({ payload: id }: PayloadAction<any>) {
  try {
    const response: AxiosResponse<IUserState> = yield axios.delete(
      `${API_URL}/users/${id}`
    );
    yield put(successDeleteUser(response.data));
  } catch (error) {
    yield put(failDeleteUser(`${error}`));
  }
}

// Update a user
function* updateUserSaga({ payload: data }: PayloadAction<any>) {
  try {
    yield axios.put(`${API_URL}/users/${data.id}`, data);
    yield put(successUpdateUser());
    navigate(PATH.USERS);
  } catch (error) {
    yield put(failUpdateUser(`${error}`));
  }
}

// Create a user
function* createUserSaga({ payload: data }: PayloadAction<any>) {
  try {
    yield axios.post(`${API_URL}/users`, data);
    yield put(successCreateUser());
    navigate(PATH.USERS);
  } catch (error) {
    yield put(failCreateUser(`${error}`));
  }
}

// Generator function
export function* userSaga() {
  yield takeLatest(getAllUsers.type, getAllUsersSaga);
  yield takeLeading(getUser.type, getUserSaga);
  yield takeLatest(deleteUser.type, deleteUserSaga);
  yield takeLatest(updateUser.type, updateUserSaga);
  yield takeLatest(createUser.type, createUserSaga);
}
