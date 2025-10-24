import React from 'react';
import { NavLink } from 'react-router-dom';
import '../app.css'

export function ViewCapsule() {

  return (
    <main>
      <h1>{localStorage.getItem("title")} - {localStorage.getItem("date")} </h1>
      <p>{localStorage.getItem("journal")}</p>
    </main>
  );
}