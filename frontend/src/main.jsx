import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store.js';
import { SocketContextProvider } from "./context/socketContext.jsx";

const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketContextProvider>
        <Router>
          <App />
        </Router>
      </SocketContextProvider>
    </Provider>
  </React.StrictMode>
);
