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
import { ConfigProvider } from '../Provider/GlobalConfig';
import PrivateRoute from './../../middleware/Auth';
import Home  from './../../pages/Home';
import Matricula from '../../pages/Matricula/Matricula';
import Consultas from '../../pages/Consultas/Consultas';
import Frequencia from '../../pages/Frequencias/Frequencias';
import Notas from '../../pages/Notas/Notas';
import ExamDay from '../../pages/Provas/Provas';
import Horarios from '../../pages/Horarios/Horarios';
import Disciplinas from '../../pages/Disciplinas/Disciplinas';
const RouteConfig = () => {
   return (
      <ConfigProvider>
         <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/aluno/" element={<PrivateRoute Component={Matricula} />} />
            <Route path="/aluno/consultas/" element={<PrivateRoute Component={Consultas} />} />
            <Route path="/aluno/notas/" element={<PrivateRoute Component={Notas} />} />
            <Route path="/aluno/frequencia/" element={<PrivateRoute Component={Frequencia} />} />
            <Route path="/aluno/agenda/avaliacoes" element={<PrivateRoute Component={ExamDay} />} />
            <Route path="/aluno/agenda/horarios" element={<PrivateRoute Component={Horarios} />} />
            <Route path="/aluno/disciplinas" element={<PrivateRoute Component={Disciplinas} />} />
         </Routes>   
      </BrowserRouter>
      </ConfigProvider>
    );
 };
 export default RouteConfig;