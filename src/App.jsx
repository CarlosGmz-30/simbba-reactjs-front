import SignInPage from './pages/SignInPage.jsx';
import ForgetPage from './pages/ForgetPage.jsx'
import React from 'react';
import AdminLayout from './components/AdminLayout.jsx';
import { BrowserRouter } from 'react-router-dom';
import './output.css'
import AppRouter from './routes/AppRouter.jsx';


import { useEffect, useReducer, useState } from 'react';
import AuthContext from './config/context/authContext.js';
import { authManager } from './config/context/authManger.js';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { signed: false };
};

  
function App() {

  const [user, dispatch] = useReducer(authManager, {}, init);
  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (

    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>

  );
}

export default App;
