import { FC } from "react";

import { ArrowTop, ArrowDown } from "../Icons";

import type { UserType } from "../../store/users/types";
import { PATH } from "../../consts/route";
import { navigate } from "../../utils/history";

interface PropsType {
  sort: string;
  filter: string;
  users: UserType[];
  deleteUser: Function;
}

export const UserList: FC<PropsType> = ({
  sort,
  filter,
  users,
  deleteUser,
}: PropsType) => {
  const handleChange = (filteredValue: string) => {
    let query = `?sort=${sort || "lastname"}`;
    if (filteredValue && filteredValue !== "") {
      query = `${query}&filter=${filteredValue}`;
    }
    navigate(`${PATH.USERS}${query}`);
  };

  const direction = sort ? (sort[0] === "-" ? true : false) : false;

  const handleClick = () => {
    let query = `?sort=${direction ? "lastname" : "-lastname"}`;
    if (filter) {
      query = `${query}&filter=${filter}`;
    }
    navigate(`${PATH.USERS}${query}`);
  };

  return (
    <div className="container p-2">
      <button
        className="btn btn-primary"
        style={{ width: "100%" }}
        onClick={() => navigate(PATH.USER_CREATE)}
      >
        Add
      </button>
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th>
              <div className="d-flex justify-content-between">
                First Name
                <input
                  placeholder="filteredText"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.value)
                  }
                  defaultValue={filter}
                  style={{ width: 200 }}
                />
              </div>
            </th>
            <th>
              <div className="d-flex justify-content-between">
                Last Name
                <div onClick={handleClick}>
                  {direction ? ArrowDown : ArrowTop}
                </div>
              </div>
            </th>
            <th>Hobby</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ width: 350 }}>{user.firstname}</td>
              <td style={{ width: 300 }}>{user.lastname}</td>
              <td
                style={{ width: 300 }}
                onClick={() => navigate(`${PATH.WIKI}/${user.hobby}`)}
              >
                {user.hobby}
              </td>
              <td style={{ width: 200 }}>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`${PATH.USERS}/${user.id}`)}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
