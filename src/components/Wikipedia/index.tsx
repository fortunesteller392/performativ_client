import { FC } from "react";

import { navigate } from "../../utils/history";

import { PATH } from "../../consts/route";

interface PropsType {
  data: any;
}

export const Wikipedia: FC<PropsType> = ({ data }) => {
  return (
    <div className="container mt-2">
      <button className="btn btn-primary" onClick={() => navigate(PATH.USERS)}>
        Back
      </button>
      <div className="mt-2">
        {data && (
          <div>
            <h1>{data.title}</h1>
            <p>{data.extract}</p>
          </div>
        )}
      </div>
    </div>
  );
};
