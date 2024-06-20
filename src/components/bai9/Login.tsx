import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const registeredUser = useSelector((state: RootState) => state.auth.registeredUser);

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [location.state]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      alert('Login successful');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
