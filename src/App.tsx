import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Process from "./page/Process/index.tsx";
import Evaluation from "./page/Evaluation/index.tsx";
import Practice from "./page/Pratice/index.tsx";
import Overview from "./page/Overview/index.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/process" element={<Process />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
};

export default App;
