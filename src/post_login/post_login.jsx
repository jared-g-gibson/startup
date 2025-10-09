import React from 'react';
import { NavLink } from 'react-router-dom';
import './post_login.css'

export function PostLogin() {
  return (
    <main>
        <h2 className="text">Welcome, Jared! Click the links below to get started</h2>
        <ul className="my-list">
            <li className="lists"><NavLink className="linker" to="/create_capsules">Create a Capsule</NavLink></li>
            <li className="lists"><NavLink className="linker" to="/view_capsules">View Capsules</NavLink></li>
            <li className="lists"><NavLink className="linker" to="/collaborate">Social</NavLink></li>
        </ul>
    </main>
  );
}