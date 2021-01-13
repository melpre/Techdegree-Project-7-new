import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink exact to="/beaches">Beaches</NavLink>
                </li>
                <li>
                    <NavLink exact to="/deserts">Deserts</NavLink>
                </li>
                <li>
                    <NavLink exact to="/mountains">Mountains</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;