import React from 'react';
import { NavLink } from 'react-bootstrap';

export function Login() {
  return (
    <main>
            <h3 className="text">Welcome! Login to view your Vault</h3>
            <form method="get" action="/post_login">
                <div className="login-prompt">
                    <div className="input-group mb-4">
                        <span className="text">Username:</span>
                        <input className="form-control" type="text" placeholder="username" />
                    </div>
                    <div className="input-group mb-4">
                        <span className="text">Password:</span>
                        <input className="form-control" type="password" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                
            </form>

            <p className="text"> <NavLink href="/create_account">Click here to create an account</NavLink></p>

            <h5 className="text">On this day, an interesting thing happened. This is where an api will go</h5>
            <img src = "https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg" width="500" />
        </main>
  );
}