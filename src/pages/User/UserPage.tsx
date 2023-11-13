import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { UserListPage } from "./UserList";
import { UserCreatePage } from "./UserCreate";
import { UserUpdatePage } from "./UserUpdate";

const UserPage: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="create" element={<UserCreatePage />} />
      <Route path=":id" element={<UserUpdatePage />} />
    </Routes>
  );
};

export default UserPage;
