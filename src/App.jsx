import SignInPage from './pages/SignInPage.jsx';
import ForgetPage from './pages/ForgetPage.jsx'
import React from 'react';
import './output.css'
import AdminLayout from './components/AdminLayout.jsx';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AdminLayout />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
