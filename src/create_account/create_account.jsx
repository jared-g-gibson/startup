import React from 'react';
import { NavLink } from 'react-bootstrap';
import './create_account.css';
import { useNavigate } from 'react-router-dom';


export function CreateAccount() {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function createAuth() {
    const res = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({username, password}),
    });
    await res.json();
    if (res.ok) {
        navigate('/login');
        console.log('success');
    }
    else {
        
        alert('Authentication failed');
    }
}

  return (
    <main>
        <h3 className="text">Create an Account</h3>
        <div>
            <div className="login-prompt">
                <div className="input-group mb-4">
                    <span className="text">Name:</span>
                    <input className="form-control" type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="input-group mb-4">
                    <span className="text">Username:</span>
                    <input className="form-control" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} required/>
                </div>
                <div className="input-group mb-4">
                    <span className="text">Password:</span>
                    <input className="form-control" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!(name && username && password)} onClick={createAuth}>Create Account</button>
            </div>
            
        </div>
        <br />
        <nav className='text'><NavLink href="/">Return to login page.</NavLink></nav>
    </main>
  );
}