import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/route/ProtectedRoute';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute Component={Home} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
