import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './store';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(register({ email, password }));
      navigate('/login', { state: { email, password } });
    };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
