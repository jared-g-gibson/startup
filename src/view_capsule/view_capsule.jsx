import React from 'react';
import { NavLink } from 'react-router-dom';

export function ViewCapsule({date}, {journal}, {title}) {

  return (
    <main>
      <h1>{title} - {date}</h1>
      <p>{journal}</p>
    </main>
  );
}