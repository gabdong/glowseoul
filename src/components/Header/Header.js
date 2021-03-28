import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className="header">
        <div className="header_inner">
            <h1 className="logo">
                <Link to="/glowseoul">GLOW</Link>
            </h1>
            <nav>
                <ul className="navigation cf">
                    <li>
                        <Link to="/glowseoul_sub01">GLOWSEOUL</Link>
                    </li>
                    <li>
                        <Link to="/glowseoul_sub02">GLOW CONSULTING</Link>
                    </li>
                    <li className="mr0">
                        <Link to="/glowseoul_sub03">GLOW SPACE</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;