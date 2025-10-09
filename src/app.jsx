import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Collaborate } from './collaborate/collaborate';
import { CreateAccount } from './create_account/create_account';
import { CreateCapsules } from './create_capsules/create_capsules';
import { Info } from './info/info';
import { Login } from './login/login'
import { PostLogin } from './post_login/post_login';
import { UnderConstruction } from './under_construction/under_construction';
import { ViewCapsules } from './view_capsules/view_capsules';

export default function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light custom-bg">
                    <NavLink className="navbar-brand" to="/">My Vault of Time</NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="menu" to="post_login">Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="menu" to="/">Logout Page</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/collaborate' element={<Collaborate />} />
                <Route path='/create_account' element={<CreateAccount />} />
                <Route path='/create_capsules' element={<CreateCapsules />} />
                <Route path='/info' element={<Info />} />
                <Route path='/post_login' element={<PostLogin />} />
                <Route path='/under_construction' element={<UnderConstruction />} />
                <Route path='/view_capsules' element={<ViewCapsules />} />
                <Route path='*' element={<NotFound />} />
            </Routes>


            <footer className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light custom-bg">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Author: Jared Gibson
                        </li>
                        <li className="nav-item">
                            <NavLink className="menu" to="https://github.com/jared-g-gibson/startup">Github Repository</NavLink>
                        </li>
                        <li>
                            <NavLink className="menu" to="info">Information</NavLink>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    </BrowserRouter>);
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}