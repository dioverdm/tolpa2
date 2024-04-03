import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/route/ProtectedRoute';
import Home from './components/home/Home';
import PageNotFound from './components/pageNotFound/PageNotFound';
import { useSelector } from 'react-redux';
import store from './store/store';
import { loadUser } from './slices/userSlice';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

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
