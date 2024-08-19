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
import UInterface from '../../components/Abstract/Ui/Interface';
import UserProfile from '../../components/UserProfile/Profile';
import './Matricula.css';
class Matricula extends Component {
    render() {
        return (
            <UInterface Name={'Matricula'}>
                <UserProfile />
            </UInterface>
        );
    }
}

export default Matricula;
