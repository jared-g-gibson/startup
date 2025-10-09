import React from "react";
import { NavLink } from 'react-bootstrap';


export function LoggedOut() {
  return (
    <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light custom-bg">
            <NavLink className="navbar-brand" href="/">My Vault of Time</NavLink>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="menu" href="/post_login">Home Page</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
}