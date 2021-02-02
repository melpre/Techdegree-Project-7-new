import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to="/cats">cats</NavLink>
                </li>
                <li>
                    <NavLink to="/dogs">dogs</NavLink>
                </li>
                <li>
                    <NavLink to="/fish">fish</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;