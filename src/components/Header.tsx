import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="logo">🚪🔑️</div>
            <nav className="nav">
                <ul>
                    <li><a href="#" className="nav-link">개요</a></li>
                    <li><a href="#" className="nav-link">과정</a></li>
                    <li><a href="#" className="nav-link">평가</a></li>
                    <li><a href="#" className="nav-link">실습</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
