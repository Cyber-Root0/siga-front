import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './../../middleware/Auth';
import Home  from './../../pages/Home';
const RouteConfig = () => {
   return (
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/teste" exact element={<Home/>} />
            <Route path="/dashboard" element={<PrivateRoute component={Home} />} />
         </Routes>   
      </BrowserRouter>
    );
 };
  
 export default RouteConfig;