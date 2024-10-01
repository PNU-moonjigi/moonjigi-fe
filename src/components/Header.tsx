import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState("overview");

  return (
    <header className="header-container">
      <div className="logo">🚪🔑️</div>
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/overview"
              className={`nav-link ${selected === "overview" ? "selected" : ""}`}
              onClick={() => setSelected("overview")}
            >
              개요
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={`nav-link ${selected === "process" ? "selected" : ""}`}
              onClick={() => setSelected("process")}
            >
              과정
            </Link>
          </li>
          <li>
            <Link
              to="/evaluation"
              className={`nav-link ${selected === "evaluation" ? "selected" : ""}`}
              onClick={() => setSelected("evaluation")}
            >
              평가
            </Link>
          </li>
          <li>
            <Link
              to="/practice"
              className={`nav-link ${selected === "practice" ? "selected" : ""}`}
              onClick={() => setSelected("practice")}
            >
              실습
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
