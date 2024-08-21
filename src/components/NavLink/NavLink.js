/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavLink.css';
const NavLink = ({ Link, Title, isActive, Icon, children }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(Link);
    };
    return (
        <li className="nav-item">
            <a
                onClick={handleClick}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                title={Title}
            >
                <i className={Icon} />
                <span className="link-text">{children}</span>
            </a>
        </li>
    );
};
export default NavLink;
