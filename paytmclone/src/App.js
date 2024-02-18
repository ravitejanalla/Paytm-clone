
import './App.css';
import React from 'react';

import { paytm_routes } from './components/configs/routes-config';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
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
  )
}

export default App;
