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
import OptionC from './Container/OptionC';
import './Options.css';
class Options extends Component {
    render() {
        return (
            <div className="options">
                <OptionC 
                    Title="Notas Parciais"
                    Url="/aluno/notas/"
                    Icon="bi bi-card-list"
                />
                <OptionC 
                    Title="Frequência"
                    Url="/aluno/frequencia/"
                    Icon="bi bi-activity"
                />
                <OptionC 
                    Title="Histórico"
                    Url=""
                    Icon="bi bi-card-checklist"
                />
            </div>
        );
    }
}
export default Options;