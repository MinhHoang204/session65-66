import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../bai9/Register';
import Login from './Login';

export default function Register() {
  const loggedInUser = useSelector((state: RootState) => state.auth.loggedInUser);

  useEffect(() => {
    if (loggedInUser) {
      console.log('Logged in user:', loggedInUser);
    }
  }, [loggedInUser]);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}
