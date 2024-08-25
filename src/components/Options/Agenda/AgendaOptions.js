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
import OptionC from './../Container/OptionC';
class AgendaOptions extends Component {
    render() {
        return (
            <div className="options">
                <OptionC 
                    Title="DATA DAS AVALIAÇÕES"
                    Url="/aluno/agenda/avaliacoes"
                    Icon="bi bi-calendar-plus link-icon"
                />
                <OptionC 
                    Title="HORÁRIO DAS AULAS"
                    Url="/aluno/agenda/aulas"
                    Icon="bi bi-card-list options-icon"
                />
            </div>
        );
    }
}
export default AgendaOptions;