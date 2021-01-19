import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink exact to="/rock">Rock</NavLink>
                </li>
                <li>
                    <NavLink exact to="/paper">Paper</NavLink>
                </li>
                <li>
                    <NavLink exact to="/scissors">Scissors</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;