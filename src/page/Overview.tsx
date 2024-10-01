import React from 'react';
import '../overviewPage/OverviewPage.css';
import TestPage from "../overviewPage/TestPage.tsx";
import ProblemPage from "../overviewPage/ProblemPage.tsx";

const Overview: React.FC = () => {
    return (
        <div className="container">
            <TestPage/>
            <ProblemPage/>
        </div>

    );
};

export default Overview;
