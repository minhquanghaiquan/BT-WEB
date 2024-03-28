import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Thay đổi import

import Home from './components/Home';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;