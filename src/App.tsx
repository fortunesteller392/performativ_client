import { FC } from "react";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header";

import UserPage from "./pages/User";
import WikipediaPage from "./pages/Wikipedia";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/wiki/:word" element={<WikipediaPage />} />
      </Routes>
    </Router>
  );
};

export default App;
