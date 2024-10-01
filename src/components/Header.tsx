import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="logo">🚪🔑️</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/overview" className="nav-link">개요</Link></li>
                    <li><Link to="/process" className="nav-link">과정</Link></li>
                    <li><Link to="/evaluation" className="nav-link">평가</Link></li>
                    <li><Link to="/practice" className="nav-link">실습</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
