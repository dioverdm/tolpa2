import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store.js';
import { loadUser } from './slices/userSlice.js';
import { SocketContextProvider } from "./context/socketContext.jsx";

const root = createRoot(document.getElementById('root'));

store.dispatch(loadUser())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </SocketContextProvider>
    </Provider>
  </React.StrictMode>,
);


