import React from 'react';
import './view_capsules.css'
import { NavLink } from 'react-router-dom';

export function ViewCapsules({usernameApp}) {

  const [capsules, setCapsules] = React.useState([]);

  React.useEffect(() => {
    const capsulesText = localStorage.getItem(usernameApp);
    if (capsulesText) {
      setScores(JSON.parse(capsulesText));
    }
  }, []);

  // Returns true if date passed in is later than current date
  function compareTime(time1) {
    const date1 = new Date(time1);
    const date2 = new Date();
    return date1 > date2;
  }

//   var capsules = localStorage.getItem(usernameApp);
//   // var capsules = JSON.parse(capsules_string);
//   if (capsules.length()) {
//     console.log(capsules.entries());

//   }
//   else {
//     console.log("Make some capsules!")
//   }
  return (
    <main>


            {/* <h2 class="text">View Your Current Capsules Here!</h2>
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
            </table> */}
        </main>
  );
}