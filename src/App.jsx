import SignInPage from './pages/SignInPage.jsx';
import ForgetPage from './pages/ForgetPage.jsx'
import React from 'react';
import AdminLayout from './components/AdminLayout.jsx';
import { BrowserRouter } from 'react-router-dom';
import './output.css'
import AppRouter from './routes/AppRouter.jsx';


function App() {
  return (

    <AppRouter />

  );
}

export default App;
