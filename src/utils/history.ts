import { NavigateFunction } from "react-router-dom";

export let navigate: NavigateFunction;

export const setNavigate = (_navigate: NavigateFunction) => {
  navigate = _navigate;
};
