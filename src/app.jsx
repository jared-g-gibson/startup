import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (<div className="app"><header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light custom-bg">
                <a className="navbar-brand" href="../index.html">My Vault of Time</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="menu" href="post_login.html">Home Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="menu" href="../index.html">Logout Page</a>
                    </li>
                </ul>
            </nav>
        </header>

        <main>Component Goes Here</main>

        <footer className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light custom-bg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        Author: Jared Gibson
                    </li>
                    <li className="nav-item">
                        <a className="menu" href="https://github.com/jared-g-gibson/startup">Github Repository</a>
                    </li>
                    <li>
                        <a className="menu" href="info.html">Information</a>
                    </li>
                </ul>
            </nav>
        </footer>
        </div>);
}