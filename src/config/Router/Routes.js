/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './../../middleware/Auth';
import Home  from './../../pages/Home';
import Matricula from '../../pages/Matricula/Matricula';
import Consultas from '../../pages/Consultas/Consultas';
const RouteConfig = () => {
   return (
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/aluno/" element={<PrivateRoute component={Matricula} />} />
            <Route path="/aluno/consultas/" element={<PrivateRoute component={Consultas} />} />
         </Routes>   
      </BrowserRouter>
    );
 };
 export default RouteConfig;