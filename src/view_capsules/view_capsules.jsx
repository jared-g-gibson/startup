import React from 'react';
import './view_capsules.css'
import { NavLink } from 'react-router-dom';

export function ViewCapsules() {
  return (
    <main>
            <h2 class="text">View Your Current Capsules Here!</h2>
            <table>
                <tr class="row1">
                    <th class="text">Capsule Name</th>
                    <th class="text">Opening Date</th>
                </tr>
                <tr  class="row2">
                    <td class="text">Italy Trip</td>
                    <td class="text">December 1, 2026</td>
                </tr>
                <tr class="row3">
                    <td class="text">Temple Time</td>
                    <td class="text">June 9, 2026</td>
                </tr>
                <tr class="row4">
                    <td class="text"><NavLink to="/under_construction">Mission Photos</NavLink></td>
                    <td class="text">September 1, 2025</td>
                </tr>
            </table>
        </main>
  );
}