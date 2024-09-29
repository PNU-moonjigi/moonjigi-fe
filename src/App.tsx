import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.tsx";
import Overview from "./page/Overview.tsx";
import Practice from "./page/Practice.tsx";
import Process from "./page/Process.tsx";
import Evaluation from "./page/Evaluation.tsx";

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
