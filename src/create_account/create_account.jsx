import React from 'react';
import { NavLink } from 'react-bootstrap';
import './create_account.css';

export function CreateAccount() {
  return (
    <main>
        <h3 className="text">Create an Account</h3>
        <form method="get" action="html/post_login.html">
            <div className="login-prompt">
                <div className="input-group mb-4">
                    <span className="text">Name:</span>
                    <input className="form-control" type="text" placeholder="name" />
                </div>
                <div className="input-group mb-4">
                    <span className="text">Username:</span>
                    <input className="form-control" type="text" placeholder="username" />
                </div>
                <div className="input-group mb-4">
                    <span className="text">Password:</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
            
        </form>
        <br />
        <nav className='text'><NavLink href="/">Return to login page.</NavLink></nav>
    </main>
  );
}