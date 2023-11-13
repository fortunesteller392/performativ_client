import { FC, useState, useEffect } from "react";

import type { UserType } from "../../store/users/types";

import { PATH } from "../../consts/route";

import { navigate } from "../../utils/history";

interface PropsType {
  user?: UserType;
  createUser?: Function;
  updateUser?: Function;
}

export const UserForm: FC<PropsType> = ({ user, createUser, updateUser }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    hobby: "",
  });
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    const { firstname, lastname, hobby } = formData;
    if (firstname !== "" && lastname !== "" && hobby !== "") {
      user ? updateUser!(formData) : createUser!(formData);
    } else {
      setErrors("The form must be filled");
    }
  };

  return (
    <div className="container mt-4" style={{ width: 600 }}>
      {errors && <div className="text-red">{errors}</div>}
      <div className="mb-3">
        <div className="form-label">First Name</div>
        <input
          type="text"
          className="form-control"
          value={formData.firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("firstname", e.target.value)
          }
          placeholder="First Name"
        />
      </div>
      <div className="mb-3">
        <div className="form-label">Last Name</div>
        <input
          type="text"
          className="form-control"
          value={formData.lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("lastname", e.target.value)
          }
          placeholder="Last Name"
        />
      </div>
      <div className="mb-3">
        <div className="form-label">Hobby</div>
        <input
          type="text"
          className="form-control"
          value={formData.hobby}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("hobby", e.target.value)
          }
          placeholder="Hobby"
        />
      </div>
      <div className="d-flex justify-content-md-end mb-3">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(PATH.USERS)}
        >
          Back
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
