import React from 'react';
import './view_capsules.css'
import { NavLink } from 'react-router-dom';

export function ViewCapsules({usernameApp}) {

  const [capsules, setCapsules] = React.useState([]);

  React.useEffect(() => {
    const capsulesText = localStorage.getItem(usernameApp);
    if (capsulesText) {
      setCapsules(JSON.parse(capsulesText));
    }
  }, []);

  // Returns true if date passed in is later than current date
  function compareTime(time1) {
    const date1 = new Date(time1);
    const date2 = new Date();
    return date1 > date2;
  }

  function calculateCapsule(i, date) {
    if(compareTime(date)) {
        return <td><NavLink to="./view_capsule">{i}</NavLink></td>;
    }
    else {
        return <td>{i}</td>;
    }
  }

  var capsuleRows = [];
  console.log(capsules);
  if (capsules.length) {
    for (const [i, capsule] of capsules.entries()) {
        capsuleRows.push(
            <tr key='i'>
                {calculateCapsule(i, capsule.date)}
                <td>{capsule.title}</td>
                <td>{capsule.date}</td>
            </tr>
        );
    }
  }
  else {
    capsuleRows.push(
        <tr key='0'>
            <td>Add some capsules!</td>
        </tr>
    )
  }

  return (
    <main>
        <table>
            <thead>
                <tr>
                    <th>Capsule Number</th>
                    <th>Capsule Title</th>
                    <th>Date Opens</th>
                </tr>
            </thead>
            <tbody>{capsuleRows}</tbody>
        </table>
    </main>
  );
}