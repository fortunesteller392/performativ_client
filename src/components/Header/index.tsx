import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { setNavigate } from "../../utils/history";

const Header: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <h3 className="ms-2"> User/ Hobby Management</h3>
    </nav>
  );
};

export default Header;
