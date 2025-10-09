import React from 'react';

export function Collaborate() {
  return (
    <main>
        {/*This is a websocket interaction*/}
        <h2 class="text">Social Page</h2>
        <form>
            <p class="text">Connect with friend: 
                <input type="text" placeholder="Type their name here"/> 
                <input type="submit"/></p>        
        </form>
        <p class="text">View friend requests:</p>
        <p class="text">Jake</p>
        <br/>
        <p class="text">View friend's capsules:</p>
        <p class="text"><a href="under_construction.html">Eli's Trip</a></p>
    </main>
  );
}