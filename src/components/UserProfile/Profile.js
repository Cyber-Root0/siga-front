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
import React, { Component } from 'react';
import Title from '../Title/Title';
import Office360 from '../Office360';
import Skin from './../../assets/img/Author.jpeg';
import './UserProfile.css';
class UserProfile extends Component {
    render() {
        return (
            <>
            <div className="content-info">
                <Title>
                    Matrícula do Aluno
                </Title>
                <div className="content-user">
                    <img src={Skin} alt="Foto de Perfil do Aluno" className="user-img" />
                    <div className="info-user">
                        <p className="info-user-text"><b>RA:</b> 1111234567890</p>
                        <p className="info-user-text"><b>Nome:</b> BRUNO VENÂNCIO ALVES</p>
                    </div>
                    <div className="info-user">
                        <p className="info-user-text">
                            <b>Habilitação:</b> Tecnólogo em Análise e Desenvolvimento de Sistemas
                        </p>
                        <p className="info-user-text"><b>Situação:</b> Em curso</p>
                    </div>
                    <div className="info-user">
                        <p className="info-user-text"><b>Período:</b> Noite</p>
                        <p className="info-user-text"><b>Semestre Ingresso:</b> 6º Semestre - 2024</p>
                    </div>
                </div>
            </div>
            <Office360 Email={'bruno.alves45@fatec.sp.gov.br'}/>
            </>
        );
    }
}
export default UserProfile;