import React from 'react';
import './create_capsules.css';

export function CreateCapsules({usernameApp}) {

  const [title, setTitle] = React.useState("");
  const [journal, setJournal] = React.useState("");
  const [date, setDate] = React.useState("");

  

  function titleChanged(e) {
    setTitle(e.target.value);
    console.log(title);
  }

  function journalChanged(e) {
    setJournal(e.target.value);
    console.log(journal);
  }

  function dateChanged(e) {
    document.getElementById("myDate").addEventListener("change", function() {
        setDate(this.value);
        
    });
    console.log("New Date: ", date);
  }

  function handleSubmit() {
    var capsules = JSON.parse(localStorage.getItem(usernameApp));
    if(capsules === null) {
        capsules = [];
    }
    const myJSONObject = {
        title: title,
        journal: journal,
        date: date
    };
    capsules.push(myJSONObject);
    localStorage.setItem(usernameApp, JSON.stringify(capsules));
  }

  return (
    <main>
        <h2 className="text">Create a Capsule!</h2>
        <div>
            <div>
                <input type="text" placeholder="Enter Title of Experience Here" size="50" onChange={titleChanged}/>
            </div>
            <br/>
            <div>
                <input type="text" placeholder="Journal about Experience Here" size="50" onChange={journalChanged}/>
            </div>
            <br/>
            <div>
                <p className="text">Insert any pictures here: </p><input type="file" />
            </div>
            <br/>
            <div>
                <p className="text">Enter date this capsule will open: </p><input type="date" onChange={dateChanged} id="myDate"/>
            </div>
            <br/>
            <div>
                <input type="submit" onClick={handleSubmit}/>
            </div>
        </div>
    </main>
  );
}