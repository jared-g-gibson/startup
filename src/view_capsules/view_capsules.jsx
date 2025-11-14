import React from 'react';
import './view_capsules.css'
import { NavLink } from 'react-router-dom';

export function ViewCapsules({usernameApp}) {

  const [capsules, setCapsules] = React.useState([]);
  

  React.useEffect(() => {
    get_capsules();
    console.log("I am in use effect of view capsules. here is capsules: ", capsules);
  }, []);

  async function get_capsules() {
    const user = usernameApp;
    console.log(user);
    const res = await fetch('/api/get_capsules', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({user}),
    });
    const data = await res.json();
    if (res.ok) {
        console.log('success');
        console.log("data in view capsules", data);
        setCapsules(data.user_capsules);
        console.log("In Get Capsules: ", capsules);
    }
    else {
        setCapsules([]);
        alert('Failed to get capsules');
        // setUsernameApp(null);
    }
}

  // Returns true if date passed in is earlier than current date
  function compareTime(time1) {
    const date1 = new Date(time1);
    const date2 = new Date();
    return date1 < date2;
  }

  function calculateCapsule(i, date, journal, title) {
    if(compareTime(date)) {
        // setDate(JSON.stringify(date));
        // return <td><NavLink to="/view_capsule">{i}</NavLink></td>;
        // var data = [date, journal, title];

        localStorage.setItem("date", JSON.stringify(date));
        localStorage.setItem("journal", JSON.stringify(journal));
        localStorage.setItem("title", JSON.stringify(title));
        return <td><NavLink to="/view_capsule">{i}</NavLink></td>;
    }
    else {
        return <td>{i}</td>;
    }
  }

  var capsuleRows = [];
  console.log(capsules);
  if (capsules && capsules.length) {
    for (const [i, capsule] of capsules.entries()) {
        capsuleRows.push(
            <tr key='i'>
                {calculateCapsule(i, capsule.date, capsule.journal, capsule.title)}
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