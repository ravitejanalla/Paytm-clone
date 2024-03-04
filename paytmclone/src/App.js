
import './App.css';
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { paytm_routes } from './components/configs/routes-config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <GoogleOAuthProvider clientId="222268781638-didtenvqh22g1477q2m2srmbfbj1nten.apps.googleusercontent.com">
    <div>
     <BrowserRouter>
  <Routes> 
   {
    paytm_routes.map((item) => {
      return <Route path={item.path} element={item.component}/>
    })
   }
  </Routes>
  </BrowserRouter>
    </div>
    </GoogleOAuthProvider>
  )
}

export default App;
