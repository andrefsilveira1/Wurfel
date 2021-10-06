import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom'

export default prop =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Atividades
            </Link>
            <Link to="/login">
            <i class="fa fa-power-off" aria-hidden="true"></i> Login
            </Link>
        </nav>
    </aside>