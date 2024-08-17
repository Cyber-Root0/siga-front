import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './../../middleware/Auth';
import Home  from './../../pages/Home';
import Matricula from '../../pages/Matricula/Matricula';
const RouteConfig = () => {
   return (
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/aluno/" element={<PrivateRoute component={Matricula} />} />
         </Routes>   
      </BrowserRouter>
    );
 };
 export default RouteConfig;