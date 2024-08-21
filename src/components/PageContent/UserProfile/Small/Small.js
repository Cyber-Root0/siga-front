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
import ProfileImg from './../../../../assets/img/Author.jpeg';
import './Small.css';
class SmallProfile extends Component {
    render() {
        return (
            <>
                <div className="profile">
                    <div className="profile-options">
                        <img className="profile-img" src={ProfileImg} alt="Foto de perfil do aluno"
                            title="Foto de perfil do aluno" />
                    </div>
                    <div className="profile-info">
                        <h2>BRUNO VENÂNCIO ALVES</h2>
                        <div className="info-course">
                            <h3 className="info-course-title">FATEC PRESIDENTE PRUDENTE</h3>
                            <div>
                                <p>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS - NOITE</p>
                                <p><b>RA:</b> 1111234567890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default SmallProfile;