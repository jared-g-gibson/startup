import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../app.css';

export function Login({setUsernameApp}) {
  const [usernameLogin, setUsernameLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pokemon, setPokemon] = React.useState("");
  const navigate = useNavigate();


  function usernameChanged(e) {
    setUsernameLogin(e.target.value);
  }

  function passwordChanged(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    // navigate('./post_login');
    authenticateUser();
  }

  async function authenticateUser() {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({usernameLogin, password}),
    });
    await res.json();
    if (res.ok) {
        navigate('/post_login');
        console.log('success');
        localStorage.setItem('user', usernameLogin);
        setUsernameApp(usernameLogin);
    }
    else {
        alert('Authentication failed');
        setUsernameApp(null);
    }
}

  React.useEffect(() => {
    let num = Math.floor(Math.random() * 1000);
    let api_str = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    fetch(api_str)
    .then((response) => response.json())
    .then((data) => 
    {setPokemon(data.name);})
    .catch((error) => console.log(error));

  }, []);

  return (
    <main>
            <h3 className="text">Welcome! Login to view your Vault</h3>
            <div>
                <div className="login-prompt">
                    <div className="input-group mb-4">
                        <span className="text">Username:</span>
                        <input className="form-control" type="text" placeholder="username" onChange={usernameChanged} required/>
                    </div>
                    <div className="input-group mb-4">
                        <span className="text">Password:</span>
                        <input className="form-control" type="password" placeholder="password" onChange={passwordChanged} required/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={!(usernameLogin && password)}>Login</button>
                </div>
                
            </div>

            <p className="text"> <NavLink href="/create_account">Click here to create an account</NavLink></p>
            <h5 className="text">Random pokemon of the day: {pokemon}</h5> 
            <img src = "https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg" width="500" />
        </main>
  );
}