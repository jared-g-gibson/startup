import React from 'react';
import { NavLink } from 'react-router-dom';
import './collaborate.css';

export function Collaborate() {
  return (
    <main>
        {/*This is a websocket interaction*/}
        <h2 className="text">Social Page</h2>
        <form>
            <p className="text">Connect with friend: 
                <input type="text" placeholder="Type their name here"/> 
                <input type="submit"/></p>        
        </form>
        <p className="text">View friend requests:</p>
        <p className="text">Jake</p>
        <br/>
        <p className="text">View friend's capsules:</p>
        <p className="text"><NavLink to="/under_construction">Eli's Trip</NavLink></p>
    </main>
  );
}